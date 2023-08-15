// рендер
/* eslint-disable */
import 'bootstrap';
import i18n from 'i18next';
import onChange from 'on-Change';
import { container } from 'webpack';
import * as yup from 'yup';
import resources from './locales/index.js';
import parse from './parser.js';

const render = (state, elements, i18nInstance) => {
    const renderPosts = () => {
        container.innerHTML = '';
        const buttons = state.posts.map();

        container.append(...buttons);
    }
};

const renderForm = () => {
    return i18nInstance.t('required');
};

switch (state.mode) {
    case 'posts': {
        renderPosts();
        break;
    }
    case 'form': {
        renderForm();
        break;
    }
    default: 
    // ссылка
    throw new Error(`Unknow node: ${state.mode}`);
}

const loadRss = (url, wachedState) => {};

const updateRss = (wachedState) => {};

export default async () => {

    const schema = yup.string().trim().required().url();

}
