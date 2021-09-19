import { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { connect } from 'react-redux'
import SignUp from './components/sign-up/sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

function App({ setCurrentUser }) {
  const [currentUser, setCurrentUser1] = useState(null);
  const user = useSelector((state) => state.user.currentUser);

  console.log(currentUser)
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        })
      }
      setCurrentUser(userAuth)
    });

  }, []);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />

        <Route exact path="/signin"
          render={() => currentUser ? (<Redirect to='/' />) :
            (<SignInAndSignOpPage />)}
        />
      </Switch>
    </>
  );
}

const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchProps)(App);
