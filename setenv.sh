#!/bin/bash
SCRIPT_DIR=$(cd $(dirname ${BASH_SOURCE:-$0});pwd)

pathmunge () {
  case ":${PATH}:" in
    *:"$1":*)
      ;;
    *)
      if [ "$2" = "after" ] ; then
        PATH=${PATH}:$1
      else
        PATH=$1:${PATH}
      fi
  esac
}

add_toolpath () {
  dir=`find "${SCRIPT_DIR}/tool" -maxdepth 1 -type d -name $1 2> /dev/null | sort -r | head -n 1`
  if [[ -d "${dir}" ]]; then
    if [[ "$2" = "bin" ]]; then
      pathmunge ${dir}/bin
    else
      pathmunge ${dir}
    fi
  fi
}

# setting for tools
add_toolpath node-* bin

export PATH
unset -f pathmunge
unset -f add_toolpath

# vim: set ft=sh ts=2 sw=2 et:
