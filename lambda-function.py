# -*- coding: utf-8 -*-
import sys
import json


def main(event):
    print('Called with event {0}'.format(event))


if __name__=='__main__':
    argv = sys.argv[1:]
    event = json.loads(argv[0])
    main(event)
