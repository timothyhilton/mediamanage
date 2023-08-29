import { FeatureProps } from "../../models/FeatureProps"

function Feature({ name, description, svg}: FeatureProps){
    return(
        <div className="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl" data-rounded="rounded-3xl" data-rounded-max="rounded-full">
            <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full" data-rounded="rounded-full">
                    {svg}
                </div>
                <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                    <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">{name}</h6>
                    <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Feature