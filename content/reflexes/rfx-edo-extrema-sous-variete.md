---
id: rfx-edo-extrema-sous-variete
type: reflexe
situation: Trouver les extrema d'une fonction sous contrainte (sur une sous-variété), montrer qu'ils existent et déterminer leur nature
chapters: [9, 6, 5]
---
## Situation

On a une fonction $g$ définie sur un ouvert de $\R^N$ et une contrainte $S=\{F_1=\dots=F_q=0\}$ (sphère, ellipsoïde, $\det A=1$, $x_1+\dots+x_n=1$, une courbe d'intersection). L'énoncé demande : « déterminer $\max_S g$ et $\min_S g$ », « montrer que $g$ atteint son maximum sur $S$ et le calculer », « trouver les points critiques de $g_{|S}$ », « en déduire l'inégalité ... » (inégalité arithmético-géométrique, de Hadamard), « calculer la distance de $a$ à $S$ », « montrer que $\max_{\norm x=1}\langle Ax,x\rangle$ est une valeur propre ». Mots-clés : *sous la contrainte*, *extrema liés*, *atteint*.

## Options

### [x] Multiplicateurs de Lagrange — [[ch09-multiplicateurs-lagrange]]
**Quand.** $S=\{x\in V : F(x)=0\}$ avec $F=(F_1,\dots,F_q):V\to\R^q$ de classe $C^1$ et **$0$ valeur régulière** (les $\nabla F_i(p)$ sont libres en tout $p\in S$), et $g$ différentiable sur $V$. Alors $p\in S$ est point critique de $g_{|S}$ si et seulement s'il existe $w_1,\dots,w_q$ réels avec $dg_p=\sum_iw_i\,d(F_i)_p$, c'est-à-dire $\nabla g(p)=\sum_iw_i\nabla F_i(p)$ (poly, Proposition IX.7.35, p. 168).
**Justification.** $p$ critique $\iff$ $dg_p$ nulle sur $T_pS=\ker dF_p$ ([[ch09-ex-point-critique-restriction]]) $\iff$ $dg_p$ combinaison des $d(F_i)_p$ (algèbre linéaire : une forme nulle sur $\bigcap\ker d(F_i)_p$ est combinaison des $d(F_i)_p$).
**Pièges.** C'est une condition **nécessaire** d'extremum (via [[ch09-extremum-local-differentielle-nulle]]) : elle donne une liste de candidats, pas le max. Vérifier la **régularité** de la contrainte sur tout $S$ ; les points où les $\nabla F_i$ sont liés doivent être étudiés à part (ils peuvent être les extrema).

### [x] Compacité, puis comparaison des valeurs aux points critiques — [[ch09-extremum-local-differentielle-nulle]]
**Quand.** $S$ est **compacte** (fermée car image réciproque d'un fermé par une application continue, et bornée) et $g$ continue : $g_{|S}$ atteint son max et son min, en des points qui sont des extrema locaux, donc des points critiques de $g_{|S}$ (poly, Théorème IX.7.31, p. 168). On compare les valeurs de $g$ en la liste (finie) des candidats. Si $S$ n'est pas compacte, se ramener à un compact par **coercivité** : si $g\to+\infty$ à l'infini sur $S$, le min est atteint dans $S\cap\{g\le g(p_0)\}$, compact.
**Justification.** Théorème des bornes atteintes (une fonction continue sur un compact non vide atteint ses bornes) puis condition nécessaire d'ordre $1$.
**Pièges.** Sans compacité, un point critique unique n'est pas forcément un extremum, et le sup peut ne pas être atteint (penser à $g(x,y)=x$ sur l'hyperbole $xy=1$ : aucun extremum).

### [x] Paramétrer la contrainte (se ramener à un problème libre) — [[ch09-ex-point-critique-parametrage]]
**Quand.** $S$ a un paramétrage explicite simple : cercle $(\cos\theta,\sin\theta)$, graphe $z=f(x,y)$, contrainte linéaire qu'on résout ($z=1-x-y$). Alors $p=x(q)$ est critique pour $g_{|S}$ si et seulement si $q$ est critique pour $g\circ x$ sur l'ouvert $U$ (poly, Exemple IX.7.34, p. 168), et on étudie $g\circ x$ par les outils du calcul différentiel libre ([[rfx-diff-extremum-hessienne]]).
**Justification.** $d(g\circ x)_q=dg_p\circ dx_q$ et $dx_q$ est un isomorphisme de $\R^m$ sur $T_pS$.
**Pièges.** Le paramétrage doit couvrir **tout** $S$ (sinon examiner les points oubliés) ; aux points où il cesse d'être une immersion, on peut créer de faux points critiques.

### [x] Nature locale par la hessienne sur $T_pS$ — [[ch09-hessienne-extrema-ordre-deux]]
**Quand.** On demande si un point critique est un **minimum local**, un maximum local ou un col (pas seulement le max global). La hessienne $d^2f_p$ de $f=g_{|S}$ n'est définie qu'en un point critique, sur $T_pS$ ([[ch09-hessienne-def]]). Calcul pratique ($g$ et $F$ de classe $C^2$) : avec les multiplicateurs $w$, poser $L=g-\sum_iw_iF_i$ ; pour toute courbe $\gamma$ tracée sur $S$ avec $\gamma(0)=p$, $\gamma'(0)=v$, on a $(g\circ\gamma)''(0)=(L\circ\gamma)''(0)=d^2L_p(v,v)+dL_p(\gamma''(0))=d^2L_p(v,v)$ car $dL_p=0$. Donc $d^2f_p(v,v)=d^2L_p(v,v)$ pour $v\in T_pS$. Définie positive sur $T_pS$ : min local strict ; définie négative : max local strict ; non dégénérée de signature mixte : col.
**Justification.** Développement de Taylor à l'ordre $2$ le long des courbes de $S$ (poly, section IX.7.6, p. 171).
**Pièges.** La hessienne de $g$ seule (sans le terme $-\sum w_id^2F_i$) est **fausse** sur une contrainte courbe. Restreindre à $T_pS$, pas à $\R^N$.

### [ ] Annuler le gradient de $g$ dans $\R^N$ (extremum libre) — [[ch06-point-critique-non-degenere-def]]
**Pourquoi ce n'est pas l'outil ici.** Un extremum **sur $S$** n'est en général pas un point critique de $g$ sur l'ouvert ambiant : $g(x,y)=x$ n'a aucun point critique dans $\R^2$, mais atteint son max sur le cercle unité en $(1,0)$.
**Quand il le serait.** Si l'extremum est cherché sur un **ouvert** (l'intérieur d'un domaine $\{F\lt0\}$) : on traite l'intérieur par $\nabla g=0$ et le **bord** $\{F=0\}$ par Lagrange, puis on compare.

## Démarche

1. **Mettre la contrainte sous la forme $F=0$** et vérifier que $0$ est valeur régulière **sur $S$** ([[rfx-edo-sous-variete-tangent]]). Si ce n'est pas le cas en certains points, alors les mettre de côté comme candidats.
2. **Existence** : si $S$ est compacte, alors max et min atteints ; sinon coercivité, ou montrer que le sup n'est pas atteint.
3. Si la contrainte se paramètre simplement, alors réduire à $g\circ x$ ; sinon écrire le système de Lagrange : $\nabla g=\sum w_i\nabla F_i$ et $F=0$ ($N+q$ équations, $N+q$ inconnues).
4. **Résoudre** en exploitant la structure (symétrie, éliminer les $w_i$, faire des quotients) ; ne pas perdre de cas ($w=0$, une coordonnée nulle).
5. **Comparer** les valeurs de $g$ aux candidats (points de Lagrange et points singuliers) : le plus grand est le max si l'existence est acquise.
6. Si l'énoncé demande la nature locale, alors hessienne de $L=g-\sum w_iF_i$ restreinte à $T_pS$.
7. Pour une **inégalité** à démontrer, alors l'écrire comme « $\max_Sg=\dots$ » sur une contrainte normalisée (homogénéité).

## Pièges

* Conclure « c'est le maximum » à partir de la seule condition de Lagrange, sans argument d'existence.
* Diviser par une variable ou par $w$ sans traiter le cas nul.
* Oublier les points où la contrainte n'est pas régulière (ex. : sur $\{y^2=x^3\}$, le point $(0,0)$).
* Utiliser la hessienne de $g$ au lieu de celle du lagrangien $L$.
* Confondre extremum local de $g$ sur $\R^N$ et sur $S$.

## Mini-exemple

*Énoncé.* Extrema de $g(x,y,z)=x+y+z$ sur l'ellipsoïde $S=\{x^2+2y^2+3z^2=1\}$.

*Solution.* $F=x^2+2y^2+3z^2-1$, $\nabla F=(2x,4y,6z)$ ne s'annule qu'en $0\notin S$ : $S$ est une sous-variété ; elle est fermée et bornée, donc compacte, et $g$ continue y atteint max et min, en des points critiques de $g_{|S}$. Lagrange : $(1,1,1)=w(2x,4y,6z)$, donc $w\ne0$ et $(x,y,z)=\big(\frac1{2w},\frac1{4w},\frac1{6w}\big)$. La contrainte donne $\frac1{w^2}\big(\frac14+\frac18+\frac1{12}\big)=\frac{11}{24w^2}=1$, soit $w=\pm\sqrt{11/24}$, et $g=\frac1w\big(\frac12+\frac14+\frac16\big)=\frac{11}{12w}=\pm\sqrt{\frac{11}{6}}$. Deux candidats seulement : $\max_Sg=\sqrt{11/6}\approx1{,}354$ et $\min_Sg=-\sqrt{11/6}$. Contrôle par Cauchy–Schwarz : $x+y+z=x+\frac1{\sqrt2}(\sqrt2y)+\frac1{\sqrt3}(\sqrt3z)\le\sqrt{1+\frac12+\frac13}\cdot1=\sqrt{11/6}$.
