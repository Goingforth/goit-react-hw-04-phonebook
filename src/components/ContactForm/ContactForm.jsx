import { FormContact } from './FormContact.styled';
import { Border } from './Border.styled';

const { Component } = require('react');

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.createContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <Border>
          <form onSubmit={this.handleSubmit}>
            <FormContact>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </div>

              <div>
                <label>Number</label>
                <input
                  type="tel"
                  name="number"
                  value={this.state.number}
                  onChange={this.handleChange}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              </div>

              <div>
                <button type="submit">Add contact</button>
              </div>
            </FormContact>
          </form>
        </Border>
      </>
    );
  }
}
export default ContactForm;
