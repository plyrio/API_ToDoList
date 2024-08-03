{pkgs}: {
  deps = [
    pkgs.pkg-config
    pkgs.openssl.dev
    pkgs.openssl_1_1
    pkgs.libressl
   ];
}
