import React from 'react';

export const ConfigurationsScreen = () => {
  return (
    <>
      <div>
        <h5 class="mb-0">Configuraciones</h5>
        {/* <p class="text-sm mb-0">Agrega los productos a cotizar</p> */}
      </div>
      <div class="container-fluid my-3 py-3">
        <div class="row mb-5">
          <div class="col-lg-3">
            <div class="card position-sticky top-1">
              <ul class="nav flex-column bg-white border-radius-lg p-3">
                <li class="nav-item pt-2">
                  <a class="nav-link text-body" data-scroll="" href="#basic-info">
                    <div class="icon me-2">
                      <svg class="text-dark mb-1" width="16px" height="16px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>document</title>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(154.000000, 300.000000)">
                                <path
                                  class="color-background"
                                  d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                  opacity="0.603585379"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <span class="text-sm">Datos usuario</span>
                  </a>
                </li>
                <li class="nav-item pt-2">
                  <a class="nav-link text-body" data-scroll="" href="#password">
                    <div class="icon me-2">
                      <svg class="text-dark mb-1" width="16px" height="16px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>box-3d-50</title>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-2319.000000, -291.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(603.000000, 0.000000)">
                                <path
                                  class="color-background"
                                  d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"
                                  opacity="0.7"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"
                                  opacity="0.7"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <span class="text-sm">Contraseña</span>
                  </a>
                </li>
                <li class="nav-item pt-2">
                  <a class="nav-link text-body" data-scroll="" href="#2fa">
                    <div class="icon me-2">
                      <svg class="text-dark mb-1" width="16px" height="16px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>switches</title>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-1870.000000, -440.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(154.000000, 149.000000)">
                                <path
                                  class="color-background"
                                  d="M10,20 L30,20 C35.4545455,20 40,15.4545455 40,10 C40,4.54545455 35.4545455,0 30,0 L10,0 C4.54545455,0 0,4.54545455 0,10 C0,15.4545455 4.54545455,20 10,20 Z M10,3.63636364 C13.4545455,3.63636364 16.3636364,6.54545455 16.3636364,10 C16.3636364,13.4545455 13.4545455,16.3636364 10,16.3636364 C6.54545455,16.3636364 3.63636364,13.4545455 3.63636364,10 C3.63636364,6.54545455 6.54545455,3.63636364 10,3.63636364 Z"
                                  opacity="0.6"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M30,23.6363636 L10,23.6363636 C4.54545455,23.6363636 0,28.1818182 0,33.6363636 C0,39.0909091 4.54545455,43.6363636 10,43.6363636 L30,43.6363636 C35.4545455,43.6363636 40,39.0909091 40,33.6363636 C40,28.1818182 35.4545455,23.6363636 30,23.6363636 Z M30,40 C26.5454545,40 23.6363636,37.0909091 23.6363636,33.6363636 C23.6363636,30.1818182 26.5454545,27.2727273 30,27.2727273 C33.4545455,27.2727273 36.3636364,30.1818182 36.3636364,33.6363636 C36.3636364,37.0909091 33.4545455,40 30,40 Z"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <span class="text-sm">2FA</span>
                  </a>
                </li>
                <li class="nav-item pt-2">
                  <a class="nav-link text-body" data-scroll="" href="#notifications">
                    <div class="icon me-2">
                      <svg class="text-dark mb-1" width="16px" height="16px" viewBox="0 0 44 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>megaphone</title>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-2168.000000, -591.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(452.000000, 300.000000)">
                                <path
                                  class="color-background"
                                  d="M35.7958333,0.273166667 C35.2558424,-0.0603712374 34.5817509,-0.0908856664 34.0138333,0.1925 L19.734,7.33333333 L9.16666667,7.33333333 C4.10405646,7.33333333 0,11.4373898 0,16.5 C0,21.5626102 4.10405646,25.6666667 9.16666667,25.6666667 L19.734,25.6666667 L34.0138333,32.8166667 C34.5837412,33.1014624 35.2606401,33.0699651 35.8016385,32.7334768 C36.3426368,32.3969885 36.6701539,31.8037627 36.6666942,31.1666667 L36.6666942,1.83333333 C36.6666942,1.19744715 36.3370375,0.607006911 35.7958333,0.273166667 Z"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M38.5,11 L38.5,22 C41.5375661,22 44,19.5375661 44,16.5 C44,13.4624339 41.5375661,11 38.5,11 Z"
                                  opacity="0.601050967"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M18.5936667,29.3333333 L10.6571667,29.3333333 L14.9361667,39.864 C15.7423448,41.6604248 17.8234451,42.4993948 19.6501416,41.764381 C21.4768381,41.0293672 22.3968823,38.982817 21.7341667,37.1286667 L18.5936667,29.3333333 Z"
                                  opacity="0.601050967"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <span class="text-sm">Notifications</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-9 mt-lg-0">
            <div class="card" id="basic-info">
              <div class="card-header">
                <h5>Datos usuario</h5>
              </div>
              <div class="card-body pt-0">
                <div class="row">
                  <div class="col-6">
                    <label class="form-label">First Name</label>
                    <div class="input-group">
                      <input id="firstName" name="firstName" class="form-control" type="text" placeholder="Alec" required="required" />
                    </div>
                  </div>
                  <div class="col-6">
                    <label class="form-label">Last Name</label>
                    <div class="input-group">
                      <input id="lastName" name="lastName" class="form-control" type="text" placeholder="Thompson" required="required" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4 col-6">
                    <label class="form-label mt-4">I'm</label>
                    <select class="form-control" name="choices-gender" id="choices-gender">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div class="col-sm-8">
                    <div class="row">
                      <div class="col-sm-5 col-5">
                        <label class="form-label mt-4">Birth Date</label>
                        <select class="form-control" name="choices-month" id="choices-month"></select>
                      </div>
                      <div class="col-sm-4 col-3">
                        <label class="form-label mt-4">&nbsp;</label>
                        <select class="form-control" name="choices-day" id="choices-day"></select>
                      </div>
                      <div class="col-sm-3 col-4">
                        <label class="form-label mt-4">&nbsp;</label>
                        <select class="form-control" name="choices-year" id="choices-year"></select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <label class="form-label mt-4">Email</label>
                    <div class="input-group">
                      <input id="email" name="email" class="form-control" type="email" placeholder="example@email.com" />
                    </div>
                  </div>
                  <div class="col-6">
                    <label class="form-label mt-4">Confirmation Email</label>
                    <div class="input-group">
                      <input id="confirmation" name="confirmation" class="form-control" type="email" placeholder="example@email.com" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <label class="form-label mt-4">Your location</label>
                    <div class="input-group">
                      <input id="location" name="location" class="form-control" type="text" placeholder="Sydney, A" />
                    </div>
                  </div>
                  <div class="col-6">
                    <label class="form-label mt-4">Phone Number</label>
                    <div class="input-group">
                      <input id="phone" name="phone" class="form-control" type="number" placeholder="+40 735 631 620" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 align-self-center">
                    <label class="form-label mt-4">Language</label>
                    <select class="form-control" name="choices-language" id="choices-language">
                      <option value="English">English</option>
                      <option value="French">French</option>
                      <option value="Spanish">Spanish</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label mt-4">Skills</label>
                    <input class="form-control" id="choices-skills" type="text" value="vuejs, angular, react" placeholder="Enter something" />
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-4" id="password">
              <div class="card-header">
                <h5>Cambiar contraseña</h5>
              </div>
              <div class="card-body pt-0">
                <label class="form-label">Constraseña actual</label>
                <div class="form-group">
                  <input class="form-control" type="password" placeholder="Current password" />
                </div>
                <label class="form-label">Nueva contraseña</label>
                <div class="form-group">
                  <input class="form-control" type="password" placeholder="New password" />
                </div>
                <label class="form-label">Confirmar constraseña</label>
                <div class="form-group">
                  <input class="form-control" type="password" placeholder="Confirm password" />
                </div>
                <button class="btn bg-gradient-dark btn-sm float-end mt-3 mb-0">Actualizar contraseña</button>
              </div>
            </div>
            <div class="card mt-4" id="2fa">
              <div class="card-header d-flex">
                <h5 class="mb-0">Two-factor authentication</h5>
                <span class="badge badge-success ms-auto">Enabled</span>
              </div>
              <div class="card-body">
                <div class="d-flex">
                  <p class="my-auto">Security keys</p>
                  <p class="text-secondary text-sm ms-auto my-auto me-3">No Security Keys</p>
                  <button class="btn btn-sm btn-outline-dark mb-0" type="button">
                    Add
                  </button>
                </div>
                <hr class="horizontal dark" />
                <div class="d-flex">
                  <p class="my-auto">SMS number</p>
                  <p class="text-secondary text-sm ms-auto my-auto me-3">+4012374423</p>
                  <button class="btn btn-sm btn-outline-dark mb-0" type="button">
                    Edit
                  </button>
                </div>
                <hr class="horizontal dark" />
                <div class="d-flex">
                  <p class="my-auto">Authenticator app</p>
                  <p class="text-secondary text-sm ms-auto my-auto me-3">Not Configured</p>
                  <button class="btn btn-sm btn-outline-dark mb-0" type="button">
                    Set up
                  </button>
                </div>
              </div>
            </div>
            <div class="card mt-4" id="notifications">
              <div class="card-header">
                <h5>Notificaciones</h5>
                <p class="text-sm">Choose how you receive notifications. These notification settings apply to the things you’re watching.</p>
              </div>
              <div class="card-body pt-0">
                <div class="table-responsive">
                  <table class="table mb-0">
                    <thead>
                      <tr>
                        <th class="ps-1" colspan="4">
                          <p class="mb-0">Activity</p>
                        </th>
                        <th class="text-center">
                          <p class="mb-0">Email</p>
                        </th>
                        <th class="text-center">
                          <p class="mb-0">Push</p>
                        </th>
                        <th class="text-center">
                          <p class="mb-0">SMS</p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="ps-1" colspan="4">
                          <div class="my-auto">
                            <span class="text-dark d-block text-sm">Mentions</span>
                            <span class="text-xs font-weight-normal">Notify when another user mentions you in a comment</span>
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckDefault11" />
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault12" />
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault13" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="ps-1" colspan="4">
                          <div class="my-auto">
                            <span class="text-dark d-block text-sm">Comments</span>
                            <span class="text-xs font-weight-normal">Notify when another user comments your item.</span>
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckDefault14" />
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckDefault15" />
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault16" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="ps-1" colspan="4">
                          <div class="my-auto">
                            <span class="text-dark d-block text-sm">Follows</span>
                            <span class="text-xs font-weight-normal">Notify when another user follows you.</span>
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault17" />
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckDefault18" />
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault19" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="ps-1" colspan="4">
                          <div class="my-auto">
                            <p class="text-sm mb-0">Log in from a new device</p>
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckDefault20" />
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckDefault21" />
                          </div>
                        </td>
                        <td>
                          <div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                            <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckDefault22" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
