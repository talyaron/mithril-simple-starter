import m from 'mithril';
import '../../node_modules/materialize-css/dist/css/materialize.min.css'

let App = {
	view: (vnode) => {
		return m('div', { class: 'fixed-action-btn' }, [
			m('a', { class: 'btn-floating btn-large red' }, m('i', { class: 'large material-icons' }, 'mode_edit')),
			m('ul', [
				m('li', m('a', { class: 'btn-floating red' }, m('i', { class: 'material-icons' }, 'insert_chart'))),
				m(
					'li',
					m(
						'a',
						{ class: 'btn-floating yellow darken-1' },
						m('i', { class: 'material-icons' }, 'format_quote')
					)
				),
				m('li', m('a', { class: 'btn-floating green' }, m('i', { class: 'material-icons' }, 'publish'))),
				m('li', m('a', { class: 'btn-floating blue' }, m('i', { class: 'material-icons' }, 'attach_file')))
			])
		]);
	}
};

export default App;
