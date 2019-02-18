import Task from './task/component';
import taskIcon from './task/icon';
import Event from './event/component';
import eventIcon from './event/icon';

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
  },
  gridSize: 10,
  backgroundColor: 'white'
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
};

export { config, customEntities };
