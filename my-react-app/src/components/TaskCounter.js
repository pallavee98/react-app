import React from 'react';
import TaskContext from '../context/TaskContext';

class TaskCounter extends React.Component {
  static contextType = TaskContext;

  constructor(props) {
    super(props);
    this.state = {
      taskCount: 0,
    };
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Component Did Mount');
    this.updateTaskCount();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update');
    if (prevState.taskCount !== this.state.taskCount) {
      this.updateTaskCount();
    }
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  updateTaskCount = () => {
    const { tasks } = this.context;
    this.setState({ taskCount: tasks.length });
  };

  render() {
    console.log('Render');
    return <p>Total Tasks: {this.state.taskCount}</p>;
  }
}

export default TaskCounter;
