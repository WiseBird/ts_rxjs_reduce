interface Observable<T> {
    reduce(accumulator: (acc: T[], value: T) => T[], seed: T[]): Observable<T[]>;
    reduce(accumulator: (acc: T, value: T) => T, seed?: T): Observable<T>;
    reduce<R>(accumulator: (acc: R, value: T) => R, seed: R): Observable<R>;
}

// import {Observable} from 'rxjs';

(null as Observable<{attribute: string, values: string[]}>)
    .reduce((acc, val) => ({
        ...acc,
        [val.attribute]: val.values,
    }), {});