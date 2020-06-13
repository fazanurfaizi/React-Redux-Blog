import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import ServerError from './pages/error/ServerError';
import NotFound from './pages/error/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/allPosts" component={AllPosts} />
        <Route exact path="/singlePost" component={SinglePost} />
        <Route exact path="/server-error" component={ServerError} />
        <Route exact path="/*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
