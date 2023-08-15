/* eslint-disable */
import * as yup from 'yup';
import onChange from 'on-change';
import axios from 'axios';
import _ from 'lodash';
import render from './render.js';


const validate = (link, rssLinks) => {
    const schema = yup.string().url().notOneOf(rssLinks);
    return schema.validate(link);
};

export default () => {
    const elements = {
        form: document.querySelector('.rss-form'),
        input: document.querySelector('#url-input'),
        example: document.querySelector('.text-muted'),
        feedback: document.querySelector('.feedback'),
        submit: document.querySelector('button[type="submit"]'),
        feeds: document.querySelector('.feeds'),
        posts: document.querySelector('.posts'),
        modal: {
          modalElement: document.querySelector('.modal'),
          title: document.querySelector('.modal-title'),
          body: document.querySelector('.modal-body'),
          showFull: document.querySelector('.full-article'),
        },
    };

    const initState = {
        form: {
          processState: 'filling', // filling, sending, success, error
          errors: {},
          validate: 'valid', // valid, invalid
        },
        data: {
          feedList: [],
          postList: [],
        },
        uiState: {
          modal: {},
          visitedPostId: new Set(),
        },
        rssLinks: [],
      };

    const wachedState = onChange(initialState, elements, i18nInstance);

    //

    elements.formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const url = data.get('url').trim();
 
        validate(url, wachedState.ыrssLinks)
        .then();

        
    })



    elements.postsContainer.addEventListener('click', () => {
        //меняем состояние
    })

    updateRss(wachedState);
    
};
