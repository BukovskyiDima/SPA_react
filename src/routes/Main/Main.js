import { Link } from 'react-router';
...
render() {
    return (<div>
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/greeting">Greeting</Link></li>
        </ul>
        {this.props.children}
    </div>);
}