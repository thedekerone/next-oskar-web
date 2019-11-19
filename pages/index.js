import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Products } from '../components/Products';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Layout } from '../components/Layout';
export default function index() {
	return (
		<Layout>
			<Hero />
			<Products />
			<About />
			<Contact />
		</Layout>
	);
}
