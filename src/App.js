import Navbar from './component/Navbar';
import TodoPage from './page/Todo';
import TodoRedux from './component/TestRedux'
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
    return <Provider store={store}>
        <Navbar />
        <TodoPage />
        <TodoRedux />
    </Provider>
}

export default App;
