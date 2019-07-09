import Task from './task/component';
import taskIcon from './task/icon';
import Event from './event/component';
import eventIcon from './event/icon';
import Text from './text/component';
import textIcon from './text/icon';

const config = {
  entityTypes: {
    Task: {
      width: 125,
      height: 125,
    },
    Event: {
      width: 50,
      height: 50,
    },
    Text: {
      width: 50,
      height: 50,
    },
  },
  gridSize: 10
};

const customEntities = {
  Task: {
    component: Task,
    icon: taskIcon,
  },
  Event: {
    component: Event,
    icon: eventIcon,
  },
  Text: {
    component: Text,
    icon: textIcon,
  },
};

export { config, customEntities };
