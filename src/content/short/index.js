import React, { useState } from 'react';
import api from '../../api/api';
import CopyClipboard from 'react-copy-to-clipboard'

import './style.scss';

const Short = () => {

	const [urlSrt, setUrlSrt] = useState({
		url: '',
		erro: ''
	});
	const [urlInfo, setfullUrl] = useState({
		fullUrl: ''
	})

	const disallow = "shrtco.de/disallowed"

	const handleSubmit = (e) => {
		setUrlSrt({ url: 'Shortening...' })
		api.get(`shorten?url=${urlInfo.fullUrl}`)
			.then((response) => {
				if (response.data.ok === true) {
					console.log(response.data)
					setUrlSrt({
						url: response.data.result.short_link
					})
				}
			}).catch((err) => {
				setUrlSrt({
					url: "The link you entered is a disallowed link, for more infos see"
				})
			})
		e.preventDefault();
	}

	const clear = () => {
		setUrlSrt({ url: 'Copied to clipboard' })
	}

	console.log(urlSrt)

	return (
		<div className="container">
			<div className="content">
				<form>
					<input
						type='text'
						className='form-control'
						id='usuario'
						placeholder='Shorten a link here...'
						value={urlInfo.fullUrl}
						required
						onChange={(e) => {
							const val = e.target.value
							setfullUrl(prevState => {
								return { ...prevState, fullUrl: val }
							})
						}}
					/>
					<button onClick={handleSubmit} type='submit' className='genric-btn primary'>Shorten It!</button>
				</form>
				{urlSrt.url !== '' && (
					<div className="container show">
						<span>
							{urlSrt.url}
							{urlSrt.url === 'The link you entered is a disallowed link, for more infos see' && (
								<span>
									&nbsp;
									<a href={disallow}>
										{disallow}
									</a>
								</span>
							)}
						</span>
						{urlSrt.url !== 'Copied to clipboard' && (
							<div>
								{urlSrt.url !== 'Shortening...' && urlSrt.url !== 'The link you entered is a disallowed link, for more infos see' && (
									<CopyClipboard text={urlSrt.url}>
										<button className='copy' onClick={clear}>Copy</button>
									</CopyClipboard>
								)}
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default Short;