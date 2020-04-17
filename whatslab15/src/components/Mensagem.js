import React from 'react'

class Mensagem extends React.Component {
    state = {
        usuario: '',
        mensagem: ''
    }

    onChangeUsuario = (event) => {
        this.setState({usuario: event.target.value})
    }

    onChangeMensagem = (event) => {
        this.setState({mensagem: event.target.value})
    }

    render () {
        
        return  <form onSubmit={this.enviarMensagem}>
                    <input
                        className={'input-usuario'}
                        placeholder={'Usuário'}
                        value={this.state.usuario}
                        onChange={this.onChangeUsuario}
                    />
                    <input
                        className={'input-mensagem'}
                        placeholder={'Mensagem'}
                        value={this.state.mensagem}
                        onChange={this.onChangeMensagem}
                    />
                    <input type='submit'/>
                </form>
    }
}
export default Mensagem