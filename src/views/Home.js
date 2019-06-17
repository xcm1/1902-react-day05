import React from 'react';
import ProList from '@/components/common/ProList';
import Banner from '@/components/common/Banner';
// import { Tabs } from 'antd-mobile';
class Com extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prolist: [],
      bannerlist: [1,2,3]
      // tabs: [
      //   { title: '1st Tab' },
      //   { title: '2nd Tab' },
      //   { title: '3rd Tab' },
      //   { title: '4th Tab' }
      // ]
    }
  }

  componentDidMount() {
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      this.setState({
        bannerlist: data
      })
    })
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      this.setState({
        prolist: data
      })
    })
  }
  // renderContent(tab) {
  //   return (
  //     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
  //       <p>Content of {tab.title}</p>
  //     </div>
  //   )
  // }
  render() {
    return (
      <div className="box">
        <header className="header">首页头部</header>
        <div className="content">
          {/* <Tabs tabs={ this.state.tabs } renderTabBar={function (props) {
            return <Tabs.DefaultTabBar {...props} page={3} />
          }}>
            { this.renderContent }
          </Tabs> */}
          <Banner bannerlist={this.state.bannerlist} />
          <ProList prolist={this.state.prolist} {...this.props} />
          首页内容</div>
      </div>
    )
  }
}

export default Com;