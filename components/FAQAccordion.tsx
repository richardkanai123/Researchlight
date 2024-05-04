import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
	return (
		<Accordion
			type='single'
			collapsible
			className='mx-auto w-full max-w-screen-sm '>
			<AccordionItem value='item-1'>
				<AccordionTrigger className={cn("text-lg text-sky-800 font-semibold ")}>
					What services does SEARCHLIGHT RESEARCH offer?
				</AccordionTrigger>
				<AccordionContent className={cn("text-base font-semibold ")}>
					We offer a range of services including academic research assistance,
					statistical analysis, data science and statistical research,
					publication support, and specialized training in statistical tools
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-2'>
				<AccordionTrigger className={cn("text-lg text-sky-800 font-semibold ")}>
					Can SEARCHLIGHT RESEARCH help me with my research methodology?
				</AccordionTrigger>
				<AccordionContent className={cn("text-base font-semibold ")}>
					Absolutely! We provide expert guidance on research design,
					methodology, and ethical considerations to ensure your study is robust
					and credible.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-3'>
				<AccordionTrigger className={cn("text-lg text-sky-800 font-semibold ")}>
					Do you offer training in statistical software?
				</AccordionTrigger>
				<AccordionContent className={cn("text-base font-semibold ")}>
					Yes, we offer training workshops for SPSS, Stata, Excel, R, Python,
					and MATLAB to equip you with the necessary skills for data analysis.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value='item-4'>
				<AccordionTrigger className={cn("text-lg text-sky-800 font-semibold ")}>
					Can I publish my research with SEARCHLIGHT RESEARCH&apos;s assistance?
				</AccordionTrigger>
				<AccordionContent className={cn("text-base font-semibold ")}>
					While we do not publish research ourselves, we can guide you to
					reputable journals and advise on ethical publication practices.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value='item-5'>
				<AccordionTrigger className={cn("text-lg text-sky-800 font-semibold ")}>
					Does SEARCHLIGHT RESEARCH complete assignments for students?
				</AccordionTrigger>
				<AccordionContent className={cn("text-base font-semibold ")}>
					No, we do not complete assignments. Our goal is to support and guide
					students in their research to maintain academic integrity.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value='item-6'>
				<AccordionTrigger className={cn("text-lg text-sky-800 font-semibold ")}>
					How does AI integration work with your services?
				</AccordionTrigger>
				<AccordionContent className={cn("text-base font-semibold ")}>
					We utilize AI to enhance research efficiency, from data collection to
					analysis, while adhering to ethical standards.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value='item-7'>
				<AccordionTrigger className={cn("text-lg text-sky-800 font-semibold ")}>
					How can I support SEARCHLIGHT RESEARCH?
				</AccordionTrigger>
				<AccordionContent className={cn("text-base font-semibold ")}>
					Donations are greatly appreciated and help us continue our mission.
					You can support us by contributing or collaborating with our research
					initiatives.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
