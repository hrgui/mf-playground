
    export type RemoteKeys = 'app02/button';
    type PackageType<T> = T extends 'app02/button' ? typeof import('app02/button') :any;