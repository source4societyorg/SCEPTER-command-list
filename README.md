# SCEPTER-command-list
SCEPTER plugin command to list all installed commands

[![scepter-logo](http://res.cloudinary.com/source-4-society/image/upload/v1519221119/scepter_hzpcqt.png)](https://github.com/source4societyorg/SCEPTER-core)

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

[![Build Status](https://travis-ci.org/source4societyorg/SCEPTER-command-list.svg?branch=master)](https://travis-ci.org/source4societyorg/SCEPTER-command-list)

# Installation

1. Setup a SCEPTER project by following the instructions from [SCEPTER-Core](https://github.com/source4societyorg/SCEPTER-core).
2. Be sure to recursively install the SCEPTER-Core boilerplates submodules. You can do this by cloning SCEPTER-Core with the --recursive flag or by issuing the `git submodule update --init` command from the project directory.
3. Execute `node bin/scepter.js list:all` to display a list of installed commands to verify this command has been installed.

# Commands

`list:all`

This command will list all of the installed commands within SCEPTER, their usage and descriptions.
