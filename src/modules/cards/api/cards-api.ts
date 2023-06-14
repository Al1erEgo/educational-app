import {
  CardPacksRequestType,
  CardPacksResponseType,
  CardsRequestType,
  CardsResponseType,
  DeleteCardRequestType,
  DeletedCardsPackRequestType,
  NewCardPacksRequestType,
  NewCardRequestType,
  UpdateCardGradeRequestType,
  UpdateCardGradeResponseType,
  UpdateCardRequestType,
  UpdateCardsPackRequestType,
} from '@/modules/cards/types'
import { rootApi } from '@/store'

export const cardsApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    cardPacks: builder.query<CardPacksResponseType, CardPacksRequestType>({
      query: (params: CardPacksRequestType) => ({
        url: 'cards/pack',
        method: 'GET',
        params: {
          ...params,
          packName: params.packName || undefined,
        },
        cacheTime: 1,
      }),
      providesTags: ['packs'],
    }),
    newCardsPack: builder.mutation<{}, NewCardPacksRequestType>({
      query: (requestData: NewCardPacksRequestType) => ({
        url: 'cards/pack',
        method: 'POST',
        body: requestData,
      }),
      invalidatesTags: ['packs'],
    }),
    deleteCardsPack: builder.mutation<{}, DeletedCardsPackRequestType>({
      query: (params: DeletedCardsPackRequestType) => ({
        url: `cards/pack`,
        method: 'DELETE',
        params,
      }),
      invalidatesTags: ['packs'],
    }),
    updateCardsPack: builder.mutation<{}, UpdateCardsPackRequestType>({
      query: (requestData: UpdateCardsPackRequestType) => ({
        url: 'cards/pack',
        method: 'PUT',
        body: requestData,
      }),
      invalidatesTags: ['packs'],
    }),
    cardsPack: builder.query<CardsResponseType, CardsRequestType>({
      query: (params: CardsRequestType) => ({
        url: 'cards/card',
        method: 'GET',
        params,
      }),
      providesTags: ['pack'],
    }),
    newCard: builder.mutation<{}, NewCardRequestType>({
      query: (requestData: NewCardRequestType) => ({
        url: 'cards/card',
        method: 'POST',
        body: requestData,
      }),
      invalidatesTags: ['packs', 'pack'],
    }),
    deleteCard: builder.mutation<{}, DeleteCardRequestType>({
      query: (params: DeleteCardRequestType) => ({
        url: 'cards/card',
        method: 'DELETE',
        params,
      }),
      invalidatesTags: ['packs', 'pack'],
    }),
    updateCard: builder.mutation<{}, UpdateCardRequestType>({
      query: (requestData: UpdateCardRequestType) => ({
        url: 'cards/card',
        method: 'PUT',
        body: requestData,
      }),
      invalidatesTags: ['packs', 'pack'],
    }),
    updateCardGrade: builder.mutation<UpdateCardGradeResponseType, UpdateCardGradeRequestType>({
      query: (requestData: UpdateCardGradeRequestType) => ({
        url: 'cards/grade',
        method: 'PUT',
        body: requestData,
      }),
      invalidatesTags: ['packs', 'pack'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useCardPacksQuery,
  useNewCardsPackMutation,
  useDeleteCardsPackMutation,
  useUpdateCardsPackMutation,
  useCardsPackQuery,
  useNewCardMutation,
  useDeleteCardMutation,
  useUpdateCardMutation,
  useUpdateCardGradeMutation,
} = cardsApi
