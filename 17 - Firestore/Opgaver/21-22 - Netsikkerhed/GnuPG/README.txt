

                    GNU Privacy Guard for Windows
                   ===============================

This is GnuPG for Windows, version 2.4.0.

Content:

     1. Important notes
     2. Changes
     3. GnuPG README file
     4. Package versions
     5. Legal notices


1. Important Notes
==================

This is the core part of the GnuPG system as used by several other
frontend programs.  This installer does not provide any graphical
frontend and thus almost everything needs to be done on the command
line.  However, a small native Windows GUI tool is included which is
used by GnuPG to ask for passphrases.  It provides only the basic
functionality and is installed under the name "pinentry-basic.exe".
Other software using this core component may install a different
version of such a tool under the name "pinentry.exe" or configure the
gpg-agent to use that version.

See https://gnupg.org for latest news.  HowTo documents and manuals
can be found there but some have also been installed on your machine.

Development and maintenance of GnuPG is mostly financed by donations;
please see https://gnupg.org/donate/ for details.


2. Record of Changes
====================

This is a list of changes to the GnuPG core for this and the previous
release.

Noteworthy changes in version 2.4.0 (2022-12-16)
------------------------------------------------

  * gpg: New command --quick-update-pref.  [rGd40d23b233]

  * gpg: New list-options show-pref and show-pref-verbose.
    [rG811cfa34cb]

  * gpg: New option --list-filter to restrict key listings like
      gpg -k --list-filter 'select=revoked-f && sub/algostr=ed25519'
    [rG1324dc3490]

  * gpg: New --export-filter export-revocs.  [rGc985b52e71]

  * gpg: Also import stray revocation certificates.  [rG7aaedfb107]

  * gpg: Add a notation to encryption subkeys in de-vs mode.  [T6279]

  * gpg: Improve signature verification speed by a factor of more than
    four.  Double detached signing speed.  [T5826]

  * gpg: Allow only OCB for AEAD encryption.  [rG5a2cef801d]

  * gpg: Fix trusted introducer for mbox only user-ids.  [T6238]

  * gpg: Report an error via status-fd for receiving a key from the
    agent.  [T5151]

  * gpg: Make --require-compliance work without the --status-fd
    option.  [rG2aacd843ad]

  * gpg: Fix verification of cleartext signatures with overlong lines.
    [T6272]

  * agent: Fix import of protected OpenPGP v5 keys.  [T6294]

  * gpgsm: Change the default cipher algorithm from AES128 to AES256.
    Also announce support for this in signatures.  [rG2d8ac55d26]

  * gpgsm: Always use the chain validation model if the root-CA
    requests this.  [rG7fa1d3cc82]

  * gpgsm: Print OCSP revocation date and reason in cert listings.
    [rGb6abaed2b5]

  * agent: Support Win32-OpenSSH emulation by gpg-agent.  [T3883]

  * scd: Support the Telesec Signature Card v2.0.  [T6252]

  * scd: Redact --debug cardio output of a VERIFY APDU.  [T5085]

  * scd: Skip deleted pkcs#15 records in CARDOS 5.  [rG061efac03f]

  * dirmngr: Fix build with no LDAP support.  [T6239]

  * dirmngr: Fix verification of ECDSA signed CRLs.  [rG868dabb402]

  * wkd: New option --add-revocs for gpg-wks-client.  [rGc3f9f2d497]

  * wkd: Ignore expired user-ids in gpg-wks-client.  [T6292]

  * card: New commands "gpg" and "gpgsm".  [rG9c4691c73e]

  See-also: gnupg-announce/2022q4/000477.html
  Release-info: https://dev.gnupg.org/T6303


Noteworthy changes in version 2.3.8 (2022-10-13)
------------------------------------------------

  * gpg: Do not consider unknown public keys as non-compliant while
    decrypting.  [T6205]

  * gpg: Avoid to emit a compliance mode line if Libgcrypt is
    non-compliant.  [T6221]

  * gpg: Improve --edit-key setpref command to ease c+p.  [rG1908fa8b83]

  * gpg: Emit an ERROR status if --quick-set-primary-uid fails and
    allow to pass the user ID by hash.  [T6126]

  * gpg: Actually show symmetric+pubkey encrypted data as de-vs
    compliant.  Add extra compliance checks for symkey_enc packets.
    [T6119]

  * gpg: In de-vs mode use SHA-256 instead of SHA-1 as implicit
    preference.  [T6043]

  * gpgsm: Fix reporting of bad passphrase error during PKCS#11
    import.  [T5713,T6037]

  * agent: Fix a regression in "READKEY --format=ssh".  [T6012]

  * agent: New option --need-attr for KEYINFO.  [rG989eae648c]

  * agent: New attribute "Remote-list" for use by KEYINFO.
    [r1383aa4750]

  * scd: Fix problem with Yubikey 5.4 firmware.  [T6070]

  * dirmngr: Fix CRL Distribution Point fallback to other schemes.
    [rG0c8299e2b5]

  * dirmngr: New LDAP server flag "areconly" (A-record-only).
    [rGd65a0335e5]

  * dirmngr: Fix upload of multiple keys for an LDAP server specified
    using the colon format.  [rG536b5cd663]

  * dirmngr: Use LDAP schema v2 when a Base DN is specified.  [T6047]

  * dirmngr: Avoid caching expired certificates.  [T6142]

  * wkd: Fix path traversal attack in gpg-wks-server.  Add the mail
    address to the pending request data.  [rG8a63a8c825,T6098]

  * wkd: New command --mirror for gpg-wks-client.  [T6224]

  * gpg-auth: New tool for authentication.  [T5862]

  * New common.conf option no-autostart.  [rG203dcc19eb]

  * Silence warnings from AllowSetForegroundWindow unless
    GNUPG_EXEC_DEBUG_FLAGS is used.  [rG4ef8516a79]

  Release-info: https://dev.gnupg.org/T6106
  See-also: gnupg-announce/2022q4/000476.html




3. GnuPG README File
====================

Below is the README file as distributed with the GnuPG source.

                       The GNU Privacy Guard 2
                      =========================
                            Version 2.4

          Copyright 1997-2019 Werner Koch
          Copyright 1998-2021 Free Software Foundation, Inc.
          Copyright 2003-2022 g10 Code GmbH


* INTRODUCTION

  GnuPG is a complete and free implementation of the OpenPGP standard
  as defined by RFC4880 (also known as PGP).  GnuPG enables encryption
  and signing of data and communication, and features a versatile key
  management system as well as access modules for public key
  directories.

  GnuPG, also known as GPG, is a command line tool with features for
  easy integration with other applications.  A wealth of frontend
  applications and libraries are available that make use of GnuPG.
  Starting with version 2 GnuPG provides support for S/MIME and Secure
  Shell in addition to OpenPGP.

  GnuPG is Free Software (meaning that it respects your freedom). It
  can be freely used, modified and distributed under the terms of the
  GNU General Public License.

* BUILD INSTRUCTIONS

  GnuPG 2.4 depends on the following GnuPG related packages:

    npth         (https://gnupg.org/ftp/gcrypt/npth/)
    libgpg-error (https://gnupg.org/ftp/gcrypt/libgpg-error/)
    libgcrypt    (https://gnupg.org/ftp/gcrypt/libgcrypt/)
    libksba      (https://gnupg.org/ftp/gcrypt/libksba/)
    libassuan    (https://gnupg.org/ftp/gcrypt/libassuan/)

  You should get the latest versions of course, the GnuPG configure
  script complains if a version is not sufficient.

  Several other standard libraries are also required.  The configure
  script prints diagnostic messages if one of these libraries is not
  available and a feature will not be available..

  You also need the Pinentry package for most functions of GnuPG;
  however it is not a build requirement.  Pinentry is available at
  https://gnupg.org/ftp/gcrypt/pinentry/ .

  After building and installing the above packages in the order as
  given above, you may continue with GnuPG installation (you may also
  just try to build GnuPG to see whether your already installed
  versions are sufficient).

  As with all packages, you just have to do

    ./configure
    make
    make check
    make install

  The "make check" is optional but highly recommended.  To run even
  more tests you may add "--enable-all-tests" to the configure run.
  Before running the "make install" you might need to become root.

  If everything succeeds, you have a working GnuPG with support for
  OpenPGP, S/MIME, ssh-agent, and smartcards.

  In case of problem please ask on the gnupg-users@gnupg.org mailing
  list for advise.

  Instruction on how to build for Windows can be found in the file
  doc/HACKING in the section "How to build an installer for Windows".
  This requires some experience as developer.

  You may run

    gpgconf -L

  to view the directories used by GnuPG.

  To quickly build all required software without installing it, the
  Speedo method may be used:

    make -f build-aux/speedo.mk  native

  This method downloads all required libraries and does a native build
  of GnuPG to PLAY/inst/.  GNU make is required and you need to set
  LD_LIBRARY_PATH to $(pwd)/PLAY/inst/lib to test the binaries.

** Specific build problems on some machines:

*** Apple OSX 10.x using XCode

  On some versions the correct location of a header file can't be
  detected by configure.  To fix that you should run configure like
  this

    ./configure  gl_cv_absolute_stdint_h=/usr/include/stdint.h

  Add other options as needed.


*** Systems without a full C99 compiler

  If you run into problems with your compiler complaining about dns.c
  you may use

    ./configure --disable-libdns

  Add other options as needed.



* RECOMMENDATIONS

** Key database daemon

  Since version 2.3.0 it is possible to store the keys in an SQLite
  database instead of the keyring.kbx file.  This is in particular
  useful for large keyrings or if many instances of gpg and gpgsm may
  run concurrently.  This is implemented using another daemon process,
  the "keyboxd".  To enable the use of the keyboxd put the option
  "use-keyboxd" into the configuration file ~/.gnupg/common.conf or the
  global /etc/gnupg/common.conf.  See also doc/examples/common.conf.
  Only public keys and X.509 certificates are managed by the keyboxd;
  private keys are still stored as separate files.

  Note that there is no automatic migration; if the use-keyboxd option
  is enabled keys are not taken from pubring.kbx.  To migrate existing
  keys to the keyboxd do this:

  1. Disable the keyboxd (remove use-keyboxd from common.conf)
  2. Export all public keys
       gpg --export --export-options backup  > allkeys.gpg
       gpgsm --export --armor                > allcerts.gpg
  3. Enable the keyboxd (add use-keyboxd to common.conf)
  4. Import all public keys
       gpg --import --import-options restore < allkeys.gpg
       gpgsm --import                        < allcerts.crt

** Socket directory

  GnuPG uses Unix domain sockets to connect its components (on Windows
  an emulation of these sockets is used).  Depending on the type of
  the file system, it is sometimes not possible to use the GnuPG home
  directory (i.e. ~/.gnupg) as the location for the sockets.  To solve
  this problem GnuPG prefers the use of a per-user directory below the
  the /run (or /var/run) hierarchy for the sockets.  It is thus
  suggested to create per-user directories on system or session
  startup.  For example, the following snippet can be used in
  /etc/rc.local to create these directories:

      [ ! -d /run/user ] && mkdir /run/user
      awk -F: </etc/passwd '$3 >= 1000 && $3 < 65000 {print $3}' \
        | ( while read uid rest; do
              if [ ! -d "/run/user/$uid" ]; then
                mkdir /run/user/$uid
                chown $uid /run/user/$uid
                chmod 700 /run/user/$uid
              fi
            done )


* DOCUMENTATION

  The complete documentation is in the texinfo manual named
  `gnupg.info'.  Run "info gnupg" to read it.  If you want a a
  printable copy of the manual, change to the "doc" directory and
  enter "make pdf" For a HTML version enter "make html" and point your
  browser to gnupg.html/index.html.  Standard man pages for all
  components are provided as well.  An online version of the manual is
  available at [[https://gnupg.org/documentation/manuals/gnupg/]] .  A
  version of the manual pertaining to the current development snapshot
  is at [[https://gnupg.org/documentation/manuals/gnupg-devel/]] .


* Using the legacy version GnuPG 1.4

  The 1.4 version of GnuPG is only intended to allow decryption of old
  data material using legacy keys which are not anymore supported by
  GnuPG 2.x.  To install both versions alongside, it is suggested to
  rename the 1.4 version of "gpg" to "gpg1" as well as the
  corresponding man page.  Newer releases of the 1.4 branch will
  likely do this by default.


* HOW TO GET MORE INFORMATION

  A description of new features and changes since version 2.1 can be
  found in the file "doc/whats-new-in-2.1.txt" and online at
  "https://gnupg.org/faq/whats-new-in-2.1.html" .

  The primary WWW page is "https://gnupg.org"
  The primary FTP site is "https://gnupg.org/ftp/gcrypt/"

  See [[https://gnupg.org/download/mirrors.html]] for a list of
  mirrors and use them if possible.  You may also find GnuPG mirrored
  on some of the regular GNU mirrors.

  We have some mailing lists dedicated to GnuPG:

     gnupg-announce@gnupg.org   For important announcements like new
                                versions and such stuff.  This is a
                                moderated list and has very low traffic.
                                Do not post to this list.

     gnupg-users@gnupg.org      For general user discussion and
                                help.

     gnupg-devel@gnupg.org      GnuPG developers main forum.

  You subscribe to one of the list by sending mail with a subject of
  "subscribe" to x-request@gnupg.org, where x is the name of the
  mailing list (gnupg-announce, gnupg-users, etc.). See
  https://gnupg.org/documentation/mailing-lists.html for archives
  of the mailing lists.

  Please direct bug reports to [[https://bugs.gnupg.org]] or post them
  direct to the mailing list <gnupg-devel@gnupg.org>.

  Please direct questions about GnuPG to the users mailing list or one
  of the PGP newsgroups; please do not direct questions to one of the
  authors directly as we are busy working on improvements and bug
  fixes.  The mailing lists are watched by the authors and we try to
  answer questions as time allows us.

  Commercial grade support for GnuPG is available; for a listing of
  offers see https://gnupg.org/service.html .  Maintaining and
  improving GnuPG requires a lot of time.  Since 2001, g10 Code GmbH,
  a German company owned and headed by GnuPG's principal author Werner
  Koch, is bearing the majority of these costs.



4. Software Versions of the Included Packages
=============================================

GnuPG for Windows depends on several independet developed packages
which are part of the installation.  These packages along with their
version numbers and the SHA-1 checksums of their compressed tarballs
are listed here:

bzip2          1.0.6-g10    6e38be3377340a21a1f13ff84b5e6adce97cd1d4
gpgme          1.18.0       d559f7994f9dfd1af611f1f14313b2abbea2a33b
libassuan      2.5.5        ec4f67c0117ccd17007c748a392ded96dc1b1ae9
libgcrypt      1.10.1       de2cc32e7538efa376de7bf5d3eafa85626fb95f
libgpg-error   1.46         a6e5efdd72e848aab4064e5ef4c6835ba344bcf1
libksba        1.6.3        7fe6d00b61e85a699a28d0aa309ba0bddcc46f3e
npth           1.6          f9d63e9747b027e4e404fe3c20c73c73719e1731
ntbtls         0.3.1        15028002a4c15d47d6037f45637e5ebc73b2ebd1
pinentry       1.2.1        29daaf45f15cb5b8ec9b4a06284343f7a87082fb
sqlite         3280000      01b9d8fc77085e144dddc87456c9783e53d09a53
zlib           1.2.12       207ba741d387e2c1607104cf0bd8cff27deb2605


5. Legal Notices Pertaining to the Individual Packages
======================================================

GnuPG for Windows consist of several independent developed packages,
available under different license conditions.  Most of these packages
are however available under the GNU General Public License (GNU GPL).
Common to all is that they are free to use without restrictions, may
be modified and that modifications may be distributed.  If the source
file (i.e. gnupg-w32-VERSION_DATE.tar.xz) is distributed along with
the installer and the use of the GNU GPL has been pointed out,
distribution is in all cases possible.

What follows is a list of copyright statements.

Here is a list with collected copyright notices. For details see the
description of each individual package.  [Compiled by wk 2017-11-07]


GNUPG is

  Copyright (C) 1997-2017 Werner Koch
  Copyright (C) 1994-2017 Free Software Foundation, Inc.
  Copyright (C) 2003-2017 g10 Code GmbH
  Copyright (C) 2002 Klarälvdalens Datakonsult AB
  Copyright (C) 1995-1997, 2000-2007 Ulrich Drepper <drepper@gnu.ai.mit.edu>
  Copyright (C) 1994 X Consortium
  Copyright (C) 1998 by The Internet Society.
  Copyright (C) 1998-2004 The OpenLDAP Foundation
  Copyright (C) 1998-2004 Kurt D. Zeilenga.
  Copyright (C) 1998-2004 Net Boolean Incorporated.
  Copyright (C) 2001-2004 IBM Corporation.
  Copyright (C) 1999-2003 Howard Y.H. Chu.
  Copyright (C) 1999-2003 Symas Corporation.
  Copyright (C) 1998-2003 Hallvard B. Furuseth.
  Copyright (C) 1992-1996 Regents of the University of Michigan.
  Copyright (C) 2000 Dimitrios Souflis
  Copyright (C) 2008,2009,2010,2012-2016 William Ahern

  GnuPG is free software; you can redistribute it and/or modify it
  under the terms of the GNU General Public License as published by
  the Free Software Foundation; either version 3 of the License, or
  (at your option) any later version.

  GnuPG is distributed in the hope that it will be useful, but WITHOUT
  ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
  or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public
  License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, see <https://www.gnu.org/licenses/>.


LIBGCRYPT is

  Copyright (C) 1989,1991-2017 Free Software Foundation, Inc.
  Copyright (C) 1994 X Consortium
  Copyright (C) 1996 L. Peter Deutsch
  Copyright (C) 1997 Werner Koch
  Copyright (C) 1998 The Internet Society
  Copyright (C) 1996-1999 Peter Gutmann, Paul Kendall, and Chris Wedgwood
  Copyright (C) 1996-2006 Peter Gutmann, Matt Thomlinson and Blake Coverett
  Copyright (C) 2003 Nikos Mavroyanopoulos
  Copyright (C) 2006-2007 NTT (Nippon Telegraph and Telephone Corporation)
  Copyright (C) 2012-2017 g10 Code GmbH
  Copyright (C) 2012 Simon Josefsson, Niels Möller
  Copyright (c) 2012 Intel Corporation
  Copyright (C) 2013 Christian Grothoff
  Copyright (C) 2013-2017 Jussi Kivilinna
  Copyright (C) 2013-2014 Dmitry Eremin-Solenikov
  Copyright (C) 2014 Stephan Mueller
  Copyright (C) 2017 Bundesamt für Sicherheit in der Informationstechnik

  Libgcrypt is free software; you can redistribute it and/or modify
  it under the terms of the GNU Lesser General Public License as
  published by the Free Software Foundation; either version 2.1 of
  the License, or (at your option) any later version.

  Libgcrypt is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public
  License along with this program; if not, see <http://www.gnu.org/licenses/>.


LIBGPG-ERROR is

  Copyright (C) 2003-2004, 2010, 2013-2017 g10 Code GmbH

  libgpg-error is free software; you can redistribute it and/or
  modify it under the terms of the GNU Lesser General Public License
  as published by the Free Software Foundation; either version 2.1 of
  the License, or (at your option) any later version.

  libgpg-error is distributed in the hope that it will be useful, but
  WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public License
  along with this program; if not, see <http://www.gnu.org/licenses/>.


LIBASSUAN is

  Copyright (C) 1992-2013 Free Software Foundation, Inc.
  Copyright (C) 1994 X Consortium
  Copyright (C) 2000 Werner Koch (dd9jn)
  Copyright (C) 2001-2016 g10 Code GmbH
  Copyright (C) 2004 Simon Josefsson

  Assuan is free software; you can redistribute it and/or modify it
  under the terms of the GNU Lesser General Public License as
  published by the Free Software Foundation; either version 2.1 of
  the License, or (at your option) any later version.

  Assuan is distributed in the hope that it will be useful, but
  WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public
  License along with this program; if not, see <http://www.gnu.org/licenses/>.


LIBKSBA is

  Copyright (C) 2001, 2002, 2003, 2004, 2005, 2006, 2010, 2011
                2012, 2013, 2014, 2015 g10 Code GmbH
  Copyright (C) 2001, 2002, 2003, 2007 Free Software Foundation, Inc.
  Copyright (C) 2000, 2001 Fabio Fiorina

  The library and the header files are distributed under the following
  terms (LGPLv3+/GPLv2+):

  KSBA is free software; you can redistribute it and/or modify
  it under the terms of either

    - the GNU Lesser General Public License as published by the Free
      Software Foundation; either version 3 of the License, or (at
      your option) any later version.

  or

    - the GNU General Public License as published by the Free
      Software Foundation; either version 2 of the License, or (at
      your option) any later version.

  or both in parallel, as here.

  KSBA is distributed in the hope that it will be useful, but WITHOUT
  ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
  or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public
  License for more details.

  The other parts (e.g. manual, build system, tests) are distributed
  under the following terms (GPLv3):

  KSBA is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation; either version 3 of the License, or
  (at your option) any later version.

  KSBA is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.


NPTH is

  Copyright (C) 2011, 2012, 2014, 2015, 2017 g10 Code GmbH

  nPth is free software; you can redistribute it and/or modify
  it under the terms of the GNU Lesser General Public License as
  published by the Free Software Foundation; either version 2.1 of
  the License, or (at your option) any later version.

  nPth is distributed in the hope that it will be useful, but
  WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See
  the GNU Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public
  License along with this program; if not, see <https://www.gnu.org/licenses/>.


NTBTLS is

  Copyright (C) 2006-2014 Brainspark B.V.
  Copyright (C) 2014-2017 g10 Code GmbH

  NTBTLS is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation; either version 3 of the License, or
  (at your option) any later version.

  NTBTLS is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, see <http://www.gnu.org/licenses/>.


PINENTRY is

  Copyright (C) 1999 Robert Bihlmeyer <robbe@orcus.priv.at>
  Copyright (C) 2001-2004, 2007-2008, 2010, 2015-2016 g10 Code GmbH
  Copyright (C) 2002, 2008 Klarälvdalens Datakonsult AB (KDAB)
  Copyright (C) 2004 by Albrecht Dreß <albrecht.dress@arcor.de>
  Copyright 2007 Ingo Klöcker
  Copyright (C) 2014 Serge Voilokov
  Copyright (C) 2015 Daiki Ueno
  Copyright (C) 2015 Daniel Kahn Gillmor <dkg@fifthhorseman.net>
  Copyright 2016 Intevation GmbH

  PINENTRY is free software; you can redistribute it and/or modify it
  under the terms of the GNU General Public License as published by
  the Free Software Foundation; either version 2 of the License, or
  (at your option) any later version.

  PINENTRY is distributed in the hope that it will be useful, but
  WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, see <https://www.gnu.org/licenses/>.


GPGME is

  Copyright (C) 1991-2013 Free Software Foundation, Inc.
  Copyright (C) 2000-2001 Werner Koch
  Copyright (C) 2001-2017 g10 Code GmbH
  Copyright (C) 2002 Klarälvdalens Datakonsult AB
  Copyright (C) 2004-2008 Igor Belyi
  Copyright (C) 2002 John Goerzen
  Copyright (C) 2014, 2015 Martin Albrecht
  Copyright (C) 2015 Ben McGinnes
  Copyright (C) 2015-2016 Bundesamt für Sicherheit in der Informationstechnik
  Copyright (C) 2016 Intevation GmbH

  GPGME is free software; you can redistribute it and/or modify it
  under the terms of the GNU Lesser General Public License as
  published by the Free Software Foundation; either version 2.1 of
  the License, or (at your option) any later version.

  GPGME is distributed in the hope that it will be useful, but
  WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public License
  along with this program; if not, see <http://www.gnu.org/licenses/>.


NSIS is

  Copyright 1999-2009 Nullsoft and Contributors
  Copyright 2002-2008 Amir Szekely
  Copyright 2003 Ramon

  This license applies to everything in the NSIS package, except where
  otherwise noted.

  This software is provided 'as-is', without any express or implied
  warranty. In no event will the authors be held liable for any
  damages arising from the use of this software.

  Permission is granted to anyone to use this software for any
  purpose, including commercial applications, and to alter it and
  redistribute it freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must
     not claim that you wrote the original software. If you use this
     software in a product, an acknowledgment in the product
     documentation would be appreciated but is not required.

  2. Altered source versions must be plainly marked as such, and must
     not be misrepresented as being the original software.

  3. This notice may not be removed or altered from any source
     distribution.

  The user interface used with the installer is

  Copyright 2002-2009 Joost Verburg

  [It is distributed along with NSIS and the same conditions as stated
   above apply]


TinySCHEME is part of the GnuPG package and is

  Copyright (c) 2000, Dimitrios Souflis
  All rights reserved.

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are
  met:

  Redistributions of source code must retain the above copyright notice,
  this list of conditions and the following disclaimer.

  Redistributions in binary form must reproduce the above copyright
  notice, this list of conditions and the following disclaimer in the
  documentation and/or other materials provided with the distribution.

  Neither the name of Dimitrios Souflis nor the names of the
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
  ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
  LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
  A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


LIBDNS is part of the GnuPG package and is

  Copyright (c) 2008, 2009, 2010, 2012-2016  William Ahern

  Permission is hereby granted, free of charge, to any person obtaining a
  copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to permit
  persons to whom the Software is furnished to do so, subject to the
  following conditions:

  The above copyright notice and this permission notice shall be included
  in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  USE OR OTHER DEALINGS IN THE SOFTWARE.


ZLIB is

  (C) 1995-2013 Jean-loup Gailly and Mark Adler

  This software is provided 'as-is', without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.

  Jean-loup Gailly        Mark Adler
  jloup@gzip.org          madler@alumni.caltech.edu


BZIP2 is

  This program, "bzip2", the associated library "libbzip2", and all
  documentation, are copyright (C) 1996-2010 Julian R Seward.  All
  rights reserved.

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions
  are met:

  1. Redistributions of source code must retain the above copyright
     notice, this list of conditions and the following disclaimer.

  2. The origin of this software must not be misrepresented; you must
     not claim that you wrote the original software.  If you use this
     software in a product, an acknowledgment in the product
     documentation would be appreciated but is not required.

  3. Altered source versions must be plainly marked as such, and must
     not be misrepresented as being the original software.

  4. The name of the author may not be used to endorse or promote
     products derived from this software without specific prior written
     permission.

  THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS
  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
  DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
  INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


SQLITE has

  been put into the public-domain by its author D. Richard Hipp:
  The author disclaims copyright to this source code.  In place of
  a legal notice, here is a blessing:

      May you do good and not evil.
      May you find forgiveness for yourself and forgive others.
      May you share freely, never taking more than you give.


***end of file ***
