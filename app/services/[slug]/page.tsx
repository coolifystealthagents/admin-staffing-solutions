import {notFound} from 'next/navigation';
import {ServiceDetail} from '../../inner-pages';
import data from '../../refresh-data.json';
import {site} from '@/lib/site';
import {serviceDetails} from '@/lib/service-details';

export function generateStaticParams(){return site.services.map(x=>({slug:x.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const v=data.services.find(x=>x.slug===slug);if(!v)return {};return {title:v.title,description:v.description,alternates:{canonical:'https://adminstaffingsolutions.com/services/'+slug},openGraph:{title:v.title,description:v.description,images:[{url:v.image,alt:v.alt}]}}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const v=site.services.find(x=>x.slug===slug),b=serviceDetails[slug];if(!v||!b)notFound();const content={slug,audience:b.audience,problem:v.short,inputs:b.inputs,work:v.tasks,outputs:b.deliverables,controls:b.controls,boundaries:b.boundaries,scenarios:b.scenarios.map(x=>x.title+'. '+x.copy),workflow:['Map the recurring tasks, current owner, source systems, and completion standard.','Match the role to the required skills, hours, and communication rhythm.','Review a small first batch before expanding the scope.'],faqs:b.faq.map(x=>({question:x.q,answer:x.a}))};
const display=data.services.find(x=>x.slug===slug)!;const schema={'@context':'https://schema.org','@type':'Service',name:display.title,description:display.description,url:'https://adminstaffingsolutions.com/services/'+slug,provider:{'@type':'Organization',name:data.brand}};
return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><ServiceDetail content={content}/></>}
