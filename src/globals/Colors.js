const CORAL = {
  primary: 'coral',
  secondary: '#E9E9EF',
  text_color: '#020202',
  opposite: '#3498db'
};

const YELLOW = {
  primary: '#f1c40f',
  secondary: '#2c3e50',
  text_color: '#020202',
  opposite: '#e74c3c'
};

const RED = {
  primary: '#e74c3c',
  secondary: '#ecf0f1',
  text_color: '#020202',
  opposite: '#2ecc71'
};

const colors = theme => {
  switch (theme) {
    case 'coral':
      return CORAL;

    case 'yellow':
      return YELLOW;

    case 'red':
      return RED;

    default:
      return YELLOW;
  }
};

export { colors };
