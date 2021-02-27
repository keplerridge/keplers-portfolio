import React from 'react';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import {Switch, Route} from 'react-router-dom';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/skills' component={Skills} />
        <Route path='/experience' component={Experience} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
    </Switch>
)