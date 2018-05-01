import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// We dont need the App component as we have react routers now
// import App from './components/app';
import reducers from './reducers';

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

import promise from 'redux-promise';

// BrowserRouter object is the one that interacts with teh History library
// Route - React component that can be rendered inside any other react component
// Purpose of Route component - provide configuration to say that if teh URL
// looks like this then show this component( Customization or Configuration)

// There are 2 things that we need to pass to a Route component
// - path - string - if the user goes to this route then I want to show this
//                   component
// component - the component to render


import { BrowserRouter, Route, Switch } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


// // Testing Purposes
// class Hello extends React.Component{
//   render(){
//     return <div>Hello</div>
//   }
// }
//
// // Test Component
// class Goodbye extends React.Component{
//   render(){
//     return <div>Goodbye</div>
//   }
// }

// <Route path="/posts/:id" component={PostsShow}/>
// :id - is a wildcard. Whatever is passed here is passed on to the
// PostsShow component as props

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow}/>
          <Route path="/" component={PostsIndex}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
