const createMultipleCookieStrings = (props, additionalProps) => {
  const cookieStrings = Object.entries(props).map(
    (entry) =>
      entry[0].toString() + '=' + entry[1].toString() + ';' + additionalProps
  );

  return cookieStrings;
};

const setExpiresDate = (propsString, minutesDifferenceFromNow) => {
  const date = new Date();
  date.setTime(date.getTime() + minutesDifferenceFromNow * 1000 * 60);

  const dateString = date.toUTCString();

  propsString += 'expires=' + dateString + '; ';

  return propsString;
};

const createCookie = (props, minutesDifferenceFromNow) => {
  additionalProps = setExpiresDate('', minutesDifferenceFromNow);
  additionalProps += 'path=/;';

  const cookieStrings = createMultipleCookieStrings(props, additionalProps);

  for (const cookieStr of cookieStrings) {
    document.cookie = cookieStr;
  }
};

const getCookies = () => {
  let propStrings = document.cookie.replace(' ', '').split(';');

  let props = {};

  for (const propStr of propStrings) {
    const [propName, propValue] = propStr.split('=');
    props[propName] = propValue;
  }

  return props;
};

const fNameField = document.getElementsByName('fName')[0];
const lNameField = document.getElementsByName('lName')[0];
const regBtn = document.getElementById('regBtn');
const form = document.getElementById('reg');
const info = document.getElementById('info');

const cookies = getCookies();

if (cookies.fName && cookies.lName) {
  info.innerHTML = `Welcome back ${cookies.fName} ${cookies.lName}`;
  form.innerHTML = '';
} else {
  regBtn.addEventListener('click', () => {
    const cookieProps = {
      fName: fNameField.value,
      lName: lNameField.value,
    };

    createCookie(cookieProps, 1);
  });
}
