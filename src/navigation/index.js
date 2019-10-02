import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../features/home';
import Hooks from '../features/hooks';
// import Selectors from '../features/selectors';
import BasicMemo from '../features/basicmemo';
import WithComponents from '../features/withcomponents';
import Selectors from '../features/selectors';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },
    Hooks: {
        screen: Hooks,
    },
    BasicMemo: {
        screen: BasicMemo,
        navigationOptions: {
            header: null,
        }
    },
    WithComponents: {
        screen: WithComponents,
        navigationOptions: {
            header: null,
        }
    },
    Selectors: {
        screen: Selectors,
        navigationOptions: {
            header: null,
        }
    },
});

export default createAppContainer(AppNavigator);
