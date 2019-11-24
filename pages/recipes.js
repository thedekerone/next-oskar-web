// improve code by making it a component

import React, { useState, useEffect } from 'react';
import { RecipeCard } from '../components/RecipeCard';
import { Loading } from '../components/Loading';
import { Layout } from '../components/Layout';
import styled from 'styled-components';
import 'isomorphic-fetch';
import { AboutButton } from '../components/Buttons';
import { useFetchApi } from '../hooks/useFetchApi';
import { useLoadMore } from '../hooks/useLoadMore';
import { RecipePage } from '../components/RecipePage';

function Dishes(props) {
	return (
		<>
			<RecipePage />
		</>
	);
}
export default Dishes;
