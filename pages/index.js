import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Hero } from '../components/Hero';
import { Products } from '../components/Products';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Layout } from '../components/Layout';
import { useWeglot } from '../hooks/useWeglot';
import { Location } from '../components/Location';
function Index() {
	const [
		initial
	] = useWeglot();
	initial !== null &&
		!initial.initialized &&
		initial.initialize({
			api_key : 'wg_91e50a16f59b2922c685b30df90da5677'
		});

	return (
		<Layout>
			<Head>
				<link rel='apple-touch-icon' sizes='57x57' href='static/favi/apple-icon-57x57.png' />
				<link rel='apple-touch-icon' sizes='60x60' href='static/favi/apple-icon-60x60.png' />
				<link rel='apple-touch-icon' sizes='72x72' href='static/favi/apple-icon-72x72.png' />
				<link rel='apple-touch-icon' sizes='76x76' href='static/favi/apple-icon-76x76.png' />
				<link rel='apple-touch-icon' sizes='114x114' href='static/favi/apple-icon-114x114.png' />
				<link rel='apple-touch-icon' sizes='120x120' href='static/favi/apple-icon-120x120.png' />
				<link rel='apple-touch-icon' sizes='144x144' href='static/favi/apple-icon-144x144.png' />
				<link rel='apple-touch-icon' sizes='152x152' href='static/favi/apple-icon-152x152.png' />
				<link rel='apple-touch-icon' sizes='180x180' href='static/favi/apple-icon-180x180.png' />
				<link rel='icon' type='image/png' sizes='192x192' href='static/favi/android-icon-192x192.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='static/favi/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='96x96' href='static/favi/favicon-96x96.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='static/favi/favicon-16x16.png' />
				<link rel='manifest' href='static/favi/manifest.json' />
				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta name='msapplication-TileImage' content='static/favi/ms-icon-144x144.png' />
				<meta name='theme-color' content='#ffffff' />
			</Head>
			<Hero />
			<Products id='products' />
			<About id='about' />
			<Contact id='contact' />
			<Location />
		</Layout>
	);
}
export default Index;
