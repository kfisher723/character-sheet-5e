import { default as ActionMenu } from './ActionMenu.js';
import { default as EventEmitter } from './EventEmitter.js';
import { default as Manager } from './Manager.js';

import { default as NoteListItem } from './components/NoteListItem.js';
import { default as NoteList } from './components/NoteList.js';
import { default as SimpleList } from './components/SimpleList.js';
import { default as TableEditable } from './components/TableEditable.js';
import { default as SkillListing } from './components/SkillListing.js';
import { default as AttributeListing } from './components/AttributeListing.js';
import { default as EditableField } from './components/EditableField.js';
/**
* Register service worker if it's supported
*/


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service_worker.js', {
        scope: '/'
    });
}

while(document.getElementById('introAlert') == null) {
    //
}

const emitter = new EventEmitter();
ActionMenu.initialize(emitter);

Manager.initialize({
    emitter: emitter,
    prefix: 'charsheet-5e-',
    appname: 'character-sheet-5e'
});

