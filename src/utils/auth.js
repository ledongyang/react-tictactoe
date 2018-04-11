import Auth0Lock from 'auth0-lock';
const authDomain = 'michaelyang.auth0.com';
const clientId = 'pJ7DTBGtb13wqxodO8YyhsKDGDhbPOLC';

class AuthService {
  constructor() {
    this.lock = new Auth0Lock(authDomain, clientId, {
      auth: {
        params: {
          scope: 'openid email'
        }
      }
    });
    // this.showLock = this.showLock.bind(this);
    this.lock.on('authenticated', this.authProcess.bind(this));
  }

  authProcess = (authResult) => {
    console.log(authResult);
  }

  showLock = () => {
    this.lock.show();
  }

  setToken = (authFields) => {
    let {idToken, exp} = authFields;
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('exp', exp * 1000);
  }

  // check if token not expired
  isCurrent = () => {
    let expString = localStorage.getItem('exp');
    if (!expString) {
      localStorage.removeItem('idToken');
      return false;
    }
    let now = new Date();
    let exp = new Date(Number(expString));
    // expired
    if (exp < now) {
      this.logout();
      return false;
    } else { // not expired
      return true;
    }
  }

  getToken = () => {
    let idToken = localStorage.getItem('idToken');
    if (this.isCurrent && idToken) {
      return idToken;
    } else {
      localStorage.removeItem('idToken');
      localStorage.removeItem('exp');
      return false;
    }
  }

  logout = () => {
    localStorage.removeItem('idToken');
    localStorage.removeItem('exp');
    window.location.reload();
  }
}

const auth = new AuthService();
export default auth;
