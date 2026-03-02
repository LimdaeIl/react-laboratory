import React from 'react';
import Notification from './Notification'

const reservedNotifications = [
  {
    id: 1,
    message: '안녕하세요, 오늘 일정을 알려드립니다.',
  },
  {
    id: 2,
    message: '점심 식사 시간입니다.',
  },
  {
    id: 3,
    message: '이제 곧 미팅이 시작됩니다.',
  }
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const {notifications} = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        
        const index = notifications.length;

        /*
        이 작업은 미리 만들어둔 알림 데이터 배열인 reservedNotifications로부터 
        알림 데이터를 하나씩 가져와서 state에 있는 notifications 배열에 넣고 업데이트하는 것입니다. 
        */
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (timer) {
      clearInterval(timer);
    }
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return <Notification key={notification.id} id={notification.id} message= {notification.message} />;
        })}
      </div>
    )
  }
}

export default NotificationList;