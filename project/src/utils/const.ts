export enum AppRoutes {
  Root = '/',
  Login = '/login',
  MyList = '/myList',
  FilmsRoot = '/films/',
  FilmsReview = '/review',
  PlayerRoot = '/player/',
  NotFoundPage = '/pageNotFound',
}

export enum APIRoutes {
  Films = '/films',
  Favorite = '/favorite',
  PromoFilm = '/promo',
  Similar = '/similar',
  Reviews = '/comments/',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  User = 'USER',
  App = 'APP',
  Films = 'FILMS',
  Film = 'FILM',
  Favorite = 'FAVORITE',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppStatus {
  Loading,
  Ok,
}


