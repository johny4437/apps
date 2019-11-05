import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Main from './pages/Main';
import NewEntry from './pages/NewEntry';

const Routes = createAppContainer(
    createSwitchNavigator({
            Main,
             NewEntry
        },{
            initialRouteName:'Main',
            backBehavior:'order'
        }),
);

export default Routes;