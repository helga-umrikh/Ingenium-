import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from './routeConfig';

export const AppRouter = () => {
  return (
    <Routes>
			{Object.values(routerConfig).map(({ element, path}) => (
        <Route
        key={path}
        path={path}
        element={element}/>
      ))}
		</Routes>
  )
}