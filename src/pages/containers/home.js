import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }

  handleOpenModal = () => {
    this.setState({
      modalVisible: true,
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }

  render() {
    return (
      <HomeLayout>
        <Related />
        <Categories 
          categories={this.props.data.categories}
          handleOpenModal={this.handleOpenModal}
        />
        {
          // Si es true renderea el modalcontainer && es parecido a ? :
          this.state.modalVisible &&
          <ModalContainer>
            <Modal
              handleClick={this.handleCloseModal}
            >
            </Modal>
          </ModalContainer>
        }
      </HomeLayout>
    )
  }
}

export default Home;
