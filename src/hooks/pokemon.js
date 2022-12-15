import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { axiosInstance, endPoints } from '~/utils/api';

const limit = 20;

async function fetchPokemonList({ pageParam }) {
    const offset = pageParam || 0;

    const params = { limit, offset };
    const response = await axiosInstance.get(endPoints.pokemon, { params });

    return { data: response.data.results, nextOffset: offset + limit };
}

export function usePokemonList() {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isSuccess } = useInfiniteQuery(
        [endPoints.pokemon],
        fetchPokemonList,
        { getNextPageParam: (lastPage) => lastPage.nextOffset }
    );

    const pokemon = data?.pages?.map((page) => page.data).flat();

    return { data: pokemon, fetchNextPage, hasNextPage, isFetchingNextPage, isSuccess };
}

async function fetchPokemonDetails(name) {
    const response = await axiosInstance.get(`${endPoints.pokemon}/${name}`);

    return response.data;
}

export function usePokemonDetails(name) {
    const { data, isLoading, isSuccess } = useQuery(
        [endPoints.pokemon, name],
        () => fetchPokemonDetails(name)
    );

    return { data, isLoading, isSuccess };
}
