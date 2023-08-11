import { Outlet } from 'react-router-dom';
// import style from './BasicLayout.module.css';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';

	export function BasicLayout() {
    		return (
        		<>
          		 < Header />
                 <main>< Outlet /></main>
				 < Footer />
        		</>
  		  );
	}