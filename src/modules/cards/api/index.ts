import { rootApi } from '../../../store/root-api'

export const cardsApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    cardPacks: builder.query<CardPacksResponseType, CardPacksRequestType>({
      query: (params: CardPacksRequestType) => ({
        url: 'cards/pack',
        method: 'GET',
        params,
        cacheTime: 1,
      }),
      providesTags: ['pack'],
    }),
    newCardsPack: builder.mutation<{}, NewCardPacksRequestType>({
      query: (requestData: NewCardPacksRequestType) => ({
        url: 'cards/pack',
        method: 'POST',
        body: requestData,
      }),
      invalidatesTags: ['pack'],
    }),
    deleteCardsPack: builder.mutation<{}, DeletedCardsPackRequestType>({
      query: ({ id }: DeletedCardsPackRequestType) => ({
        url: `cards/pack?id=${id}`,
        method: 'DELETE',
      }),
      /*invalidatesTags: ['pack'],*/
    }),

    updatedCardsPack: builder.mutation<{}, UpdatedCardsPackRequestType>({
      query: (requestData: UpdatedCardsPackRequestType) => ({
        url: 'cards/pack',
        method: 'PUT',
        body: requestData,
      }),
    }),
    cards: builder.query<CardsResponseType, CardsRequestType>({
      query: (params: CardsRequestType) => ({
        url: 'cards/card',
        method: 'GET',
        params,
      }),
    }),
    newCard: builder.mutation<{}, NewCardsRequestType>({
      query: (requestData: NewCardsRequestType) => ({
        url: 'cards/card',
        method: 'POST',
        body: requestData,
      }),
    }),
    deletedCard: builder.mutation<{}, DeletedCardRequestType>({
      query: (requestData: DeletedCardRequestType) => ({
        url: 'cards/card',
        method: 'DELETE',
        body: requestData,
      }),
    }),
    updatedCard: builder.mutation<{}, UpdatedCardRequestType>({
      query: (requestData: UpdatedCardRequestType) => ({
        url: 'cards/card',
        method: 'PUT',
        body: requestData,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useCardPacksQuery,
  useNewCardsPackMutation,
  useDeleteCardsPackMutation,
  useUpdatedCardsPackMutation,
  useCardsQuery,
  useNewCardMutation,
  useDeletedCardMutation,
  useUpdatedCardMutation,
} = cardsApi

type CardPacksResponseType = {
  cardPacks: [
    {
      _id: string
      user_id: string
      name: string
      cardsCount: number
      created: string
      updated: string
      user_name: string
    }
  ]
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
}
type CardPacksRequestType = {
  packName?: string
  min?: number
  max?: number
  sortPacks?: string
  page?: number
  pageCount?: number
  user_id?: string
  block?: boolean
}

export type NewCardPacksRequestType = {
  cardsPack: {
    name?: string
    deckCover?: string
    private?: boolean
  }
}

type DeletedCardsPackRequestType = {
  id: string
}

type UpdatedCardsPackRequestType = {
  _id: string
  name?: string
}

export type CardsResponseType = {
  cards: [
    {
      answer: string
      question: string
      cardsPack_id: string
      grade: number
      shots: number
      user_id: string
      created: string
      updated: string
      _id: string
    }
  ]
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  packUserId: string
}
type CardsRequestType = {
  cardAnswer?: string
  cardQuestion?: string
  cardsPack_id: string
  min?: number
  max?: number
  sortCards?: string
  page?: number
  pageCount?: number
}

type NewCardsRequestType = {
  card: {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
  }
}

type DeletedCardRequestType = {
  id: string
}

type UpdatedCardRequestType = {
  card: {
    _id: string
    question?: string
  }
}
