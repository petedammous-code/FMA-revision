---
id: ex-ch05-grothendieck-sous-espace-c1
type: exercise
chapters: [5]
title: Un sous-espace fermé de fonctions dérivables est de dimension finie
source: "Classique (théorème de Grothendieck, version $C^1$ ; cf. Rudin, *Functional Analysis*, Thm 5.2 pour la version $L^p$) — rédaction et question 3 adaptées"
difficulty: 2
time: 25
tools: [ch05-graphe-ferme, ch05-norme-operateur-def, ch05-primitive-integrale, ch05-accroissements-finis-borne, ch05-normes-comparables-equivalentes]
---
## Énoncé

On note $E=C^0([0,1],\R)$, muni de la norme $\|u\|_\infty=\sup_{t\in[0,1]}|u(t)|$ ; on admet que $(E,\|\cdot\|_\infty)$ est un espace de Banach. On note $C^1([0,1],\R)\subset E$ le sous-espace des fonctions dérivables sur $[0,1]$ (à droite en $0$, à gauche en $1$) de dérivée continue.

Soit $F$ un sous-espace vectoriel de $E$, **fermé** dans $(E,\|\cdot\|_\infty)$, tel que $F\subset C^1([0,1],\R)$. On munit $F$ de la norme $\|\cdot\|_\infty$ et l'on considère l'application linéaire $D:F\to E$, $D(f)=f'$.

1. Montrer que $D$ est continue.
2. En déduire qu'il existe une constante $C\ge0$ telle que $\|f'\|_\infty\le C\,\|f\|_\infty$ pour tout $f\in F$.
3. Soit $m\in\N^*$ tel que $2m>C$. Montrer que l'application $\Lambda:F\to\R^{m+1}$, $f\mapsto\big(f(0),f(\tfrac1m),f(\tfrac2m),\dots,f(1)\big)$, est injective. Conclure que $F$ est de dimension finie.
4. Montrer de deux façons que le sous-espace $\R[X]$ des fonctions polynomiales sur $[0,1]$ n'est pas fermé dans $(E,\|\cdot\|_\infty)$ : à l'aide de ce qui précède, puis directement.

## Indices

### Indice 1
Un opérateur linéaire entre deux espaces de Banach dont on ne sait rien estimer directement : le théorème qui ramène la continuité à une propriété « qualitative » vérifiable sur des suites.

### Indice 2
Théorème du graphe fermé : il faut que $F$ et $E$ soient des Banach ($F$ fermé dans un Banach) et que $f_n\to f$, $f_n'\to g$ uniformément entraîne $g=f'$. Écrire $f_n(x)=f_n(0)+\int_0^xf_n'(t)\,dt$ et passer à la limite.

### Indice 3
Pour 3, si $f$ s'annule aux points $k/m$, tout $x\in[0,1]$ est à distance au plus $\frac1{2m}$ de l'un d'eux : accroissements finis avec la borne $\|f'\|_\infty\le C\|f\|_\infty$.

## Corrigé

**1.** *Les espaces.* $E$ est un Banach (admis) et $F$ est un sous-espace fermé de $E$, donc complet : une suite de Cauchy de $F$ converge dans $E$, et sa limite est dans $F$ puisque $F$ est fermé. Ainsi $F$ et $E$ sont deux espaces de Banach et $D:F\to E$ est linéaire : on peut appliquer le théorème du graphe fermé ([[ch05-graphe-ferme]]) ; il suffit de montrer que le graphe de $D$ est fermé dans $F\times E$.

*Graphe fermé.* Soit $(f_n)$ une suite de $F$ telle que $f_n\to f$ dans $F$ et $f_n'=D(f_n)\to g$ dans $E$ (convergences uniformes sur $[0,1]$). Il s'agit de montrer que $g=D(f)=f'$. Pour $x\in[0,1]$, comme $f_n$ est $C^1$ sur $[0,1]$,
$$
f_n(x)=f_n(0)+\int_0^xf_n'(t)\,dt .
$$
Quand $n\to\infty$ : $f_n(x)\to f(x)$, $f_n(0)\to f(0)$, et $\big|\int_0^x(f_n'-g)\big|\le x\,\|f_n'-g\|_\infty\to0$. Donc $f(x)=f(0)+\int_0^xg(t)\,dt$ pour tout $x\in[0,1]$. Comme $g$ est continue, le théorème [[ch05-primitive-integrale]] donne que $x\mapsto\int_0^xg$ est dérivable sur $]0,1[$ de dérivée $g$ ; donc $f'=g$ sur $]0,1[$, puis sur $[0,1]$ par continuité de $f'$ ($f\in F\subset C^1$) et de $g$. Ainsi $(f,g)=(f,D(f))$ appartient au graphe : celui-ci est fermé, et $D$ est continue.

**2.** $D$ est linéaire continue de $(F,\|\cdot\|_\infty)$ dans $(E,\|\cdot\|_\infty)$, donc bornée ([[ch05-norme-operateur-def]]) : avec $C=\|D\|_{\mathcal L(F;E)}$, on a $\|f'\|_\infty=\|D(f)\|_\infty\le C\|f\|_\infty$ pour tout $f\in F$.

**3.** $\Lambda$ est linéaire ; montrons que son noyau est nul. Soit $f\in F$ avec $f(k/m)=0$ pour $k=0,\dots,m$, et soit $x\in[0,1]$. Il existe $k$ tel que $|x-\frac km|\le\frac1{2m}$. Sur le segment d'extrémités $x$ et $\frac km$ (s'il n'est pas réduit à un point), $f$ est continue, dérivable, et $|f'|\le\|f'\|_\infty$ ; l'inégalité des accroissements finis ([[ch05-accroissements-finis-borne]]) et la question 2 donnent
$$
|f(x)|=\Big|f(x)-f\big(\tfrac km\big)\Big|\le\|f'\|_\infty\,\Big|x-\frac km\Big|\le\frac{C}{2m}\,\|f\|_\infty .
$$
En prenant le sup en $x$ : $\|f\|_\infty\le\frac C{2m}\|f\|_\infty$ avec $\frac C{2m}<1$, d'où $\|f\|_\infty=0$, $f=0$. Donc $\Lambda$ est une application linéaire injective de $F$ dans $\R^{m+1}$ : $\dim F\le m+1$. En particulier $F$ est de dimension finie (et $\dim F\le\lfloor C/2\rfloor+2$).

**4.** *Avec ce qui précède.* $\R[X]\subset C^1([0,1],\R)$. Si $\R[X]$ était fermé dans $E$, la question 3 dirait qu'il est de dimension finie ; or les monômes $1,t,t^2,\dots$ forment une famille libre infinie (un polynôme nul sur $[0,1]$, ensemble infini, est le polynôme nul). On peut aussi contredire directement la question 2 : $f_n(t)=t^n$ vérifie $\|f_n\|_\infty=1$ et $\|f_n'\|_\infty=n$, non bornée.

*Directement.* Soit $P_N(t)=\sum_{k=0}^N\frac{t^k}{k!}$. Pour $t\in[0,1]$, $|e^t-P_N(t)|=\sum_{k>N}\frac{t^k}{k!}\le\sum_{k>N}\frac1{k!}\to0$ : $P_N\to\exp$ dans $(E,\|\cdot\|_\infty)$. Mais $\exp\notin\R[X]$ : un polynôme de degré $\le d$ a une dérivée $(d+1)$-ième nulle, alors que $\exp^{(d+1)}=\exp$ ne s'annule pas. Donc $\exp\in\overline{\R[X]}\setminus\R[X]$.

## Pièges et variantes

* > ⚠️ Le théorème du graphe fermé exige que l'espace **de départ** soit complet. Sur $G=C^1([0,1],\R)$ tout entier muni de $\|\cdot\|_\infty$, la même preuve montre que le graphe de $D:G\to E$ est fermé, et pourtant $D$ n'est pas continue ($t^n$ ci-dessus) : il n'y a pas de contradiction, cela prouve seulement que $(C^1([0,1],\R),\|\cdot\|_\infty)$ **n'est pas** complet. C'est précisément l'hypothèse « $F$ fermé » qui rend $F$ complet.
* Dans la vérification du graphe fermé, on **suppose** que $(D(f_n))$ converge (vers un certain $g$) : on n'a pas à le démontrer. C'est tout l'intérêt du théorème par rapport à la continuité directe.
* Ne pas confondre « $f_n\to f$ uniformément » et « $f_n'\to f'$ » : en général la première n'entraîne pas la seconde (penser à $\frac{\sin(n^2t)}n$) ; ici c'est le théorème qui donne la continuité de $D$, donc la seconde.
* Variante (via [[ch05-normes-comparables-equivalentes]]) : sur $F$, les normes $\|f\|_\infty$ et $N(f)=\|f\|_\infty+\|f'\|_\infty$ sont comparables ($\|\cdot\|_\infty\le N$) et toutes deux complètes (pour $N$ : une suite $N$-Cauchy de $F$ converge uniformément ainsi que les dérivées, et la limite est dans $F$ et $C^1$ par l'argument de la question 1). Elles sont donc équivalentes, ce qui redonne la question 2.
* Variante célèbre (Grothendieck) : un sous-espace fermé de $L^p([0,1])$ ($1\le p<\infty$) contenu dans $L^\infty$ est de dimension finie ; la preuve commence aussi par le graphe fermé, puis utilise un argument d'analyse fonctionnelle plus fin.
