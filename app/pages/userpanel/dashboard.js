import React, { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarThree from "../../layout/headers/NavbarThree";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { logoutUser } from "../../slices/action-creators";
import FooterThree from "../../layout/footers/FooterThree";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/pages/userPanel";
import { getCookie } from 'cookies-next';
import jwt from "jsonwebtoken";
import dotenv from  'dotenv';
/*export const getStaticProps = async ({ locale }) => ({ 
  props: { ...(await serverSideTranslations(locale, ["common"])) } 
});*/

export const getServerSideProps = async ({ req, res, locale }) => {
	const cookieuserToken = getCookie("userToken", { req, res });
	if (!cookieuserToken) return { props: { isAuthenticated: false } };
	try {
		const isAuthenticated = await jwt.verify(
			cookieuserToken, "coolUser",
		);
		
		return { props: { isAuthenticated: isAuthenticated }  };
	} catch (err) {
		return { props: { isAuthenticated: false } };
	}
};

const UserDashboard = ({ isAuthenticated }) => {
  const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
	const router = useRouter();
	const cookieuserToken = getCookie("userToken");
	
	useEffect(() => {
		// rome-ignore lint/complexity/useSimplifiedLogicExpression: <explanation>
		if (!isAuthenticated || !isLoggedIn) {
			dispatch(logoutUser());
			router.push("/login");
		}
	}, [isAuthenticated, isLoggedIn]);

  
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent active={"Dashboard"} />
      <FooterThree />
    </>
  );
};

export default UserDashboard;
