var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0,
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1 
        });
    },
    decrement: function () {
        this.setState({
            counter: this.state.counter  -1 
        });
    },

    getDefaultProps: function(){
		console.log('Ustawienie domyślnych propsów. kiedy tworzymy elementy z często ' + 'powtarzającą się zawartością');
	},
	
	componentWillMount: function() {
		console.log('Możemy wykonać różne operacje, kalkulacje oparte na stanie i propsach, ' + 'w stanie przed renderowaniem');
	},
	
	componentDidMount: function() {
		console.log('W tym momwncie DOM jest już załadowany, można wykonać na nim różne operacje');
	},
	
	componentWillReceiveProps: function(){
		console.log('W momencie pojawienia się nowych propsów możemy wykonać różne operacje np. dotyczące state mając dostęp do wartości nowych, ale także starych propsów');
	},
	
	shouldComponentUpdate: function(){
		console.log('Możeby zmienić na false, jeśli nie chcemy, żeby aplikacja wywołała zmiany spowodowane przez zminę propsów  lub stanu');
		return true;
	},
	
	componentWillUpdate: function(){
		console.log('Podobnie jak componentWIllMount, możemy operować na DOM');
	},
	
	componentWillUnmount: function(){
		console.log('W tym momencie można anulować EventListenery przypisane do elementu lub anulować zapytanie sieciowe');
	},

    render: function() {
        return (
            React.createElement('div', {className: 'counter'},
                React.createElement('h2', {}, 'Counter'),
                React.createElement('span', {}, 'Licznik: ' + this.state.counter),
                React.createElement('div', {}, 
                    React.createElement('button', {
                        className: 'incr_button', 
                        onClick: this.increment},'Increment Counter'),
                    React.createElement('button', {
                        onClick: this.decrement}, 'Decrement Counter')
                )
            )
        );
    }
});

var app = React.createElement('div', {className: 'counters'},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
)

ReactDOM.render(app, document.getElementById('app'));


            