import { Outlet } from 'react-router-dom';
// import style from './BasicLayout.module.css';

	export function BasicLayout() {
    		return (
        		<>
          		 <header>HEADER</header>
                 <main>< Outlet /></main>
                 <footer>FOOTER</footer>
        		</>
  		  );
	}