import { connect } from 'react-redux'
import { clikcMenu } from '../actions'
import Home  from '../components/Home.jsx'

const mapStateToProps = (state) => ({
  isClick: state.menu.isClick
})

const mapDispatchToProps = (dispatch) => ({
  clickMenu: (flag) => {
    dispatch(clikcMenu(flag))
  }
})

const Content = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default Content