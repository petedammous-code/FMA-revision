---
id: ch05-derivee-variable-reelle
type: proposition
chapter: 5
title: "Fonctions d'une variable réelle : $f'(a)=df_a(1)$"
ref: Exemple V.3.4
page: 98
importance: 2
depends: [ch05-norme-operateur-def, ch05-lef-banach-norme-algebre, ch05-differentielle-def, ch05-derivee-directionnelle-unicite]
tags: [variable-reelle, derivee, vecteur-tangent, courbe]
---
## Intuition

> 💡 Pour une courbe $f:U\subset\R\to F$ (un point qui se déplace dans $F$ au cours du temps $t$), la différentielle $df_a$ est une application linéaire de $\R$ dans $F$ ; or une telle application est simplement $t\mapsto t\,v$ pour un vecteur $v\in F$. Ce vecteur, c'est la **vitesse** (le vecteur tangent) $f'(a)$.

On retrouve donc la dérivée usuelle : différentiable en $a$ $\Leftrightarrow$ dérivable en $a$, et $df_a(t)=t\,f'(a)$. Ici $F$ est un espace vectoriel normé quelconque (par exemple $\R^n$, ou un espace de fonctions) ; $\mathcal L(\R;F)$ est l'espace des applications linéaires continues $\R\to F$, muni de la norme d'opérateur ([[ch05-norme-operateur-def]], [[ch05-lef-banach-norme-algebre]]).

## Énoncé

**Proposition (poly, Exemple V.3.4, p. 98, et Exercice V.1.2, p. 94).** Soit $F$ un espace vectoriel normé.
1. L'application $\Phi:\mathcal L(\R;F)\to F$, $T\mapsto T(1)$, est un isomorphisme linéaire **isométrique** : $\|T\|_{\mathcal L(\R;F)}=\|T(1)\|_F$, d'inverse $v\mapsto(t\mapsto t\,v)$.
2. Soit $f:U\to F$ une application d'un ouvert $U$ de $\R$ dans $F$, différentiable au point $a\in U$. Alors $df_a\in\mathcal L(\R;F)$ s'identifie au vecteur $df_a(1)\in F$ (le **vecteur tangent** de $f$ en $a$), que l'on note $f'(a)$ :
$$
f'(a)=df_a(1),\qquad df_a(t)=t\,f'(a)\quad(t\in\R).
$$

**Complément (différentiable = dérivable).** $f$ est différentiable en $a$ si et seulement si la limite $\lim_{t\to0}\frac{f(a+t)-f(a)}{t}$ existe dans $F$, et cette limite est alors $f'(a)$. De plus $f$ est de classe $C^1$ sur $U$ si et seulement si $f'$ est continue de $U$ dans $F$.

## Hypothèses

### H1 — $U$ ouvert de $\R$

**Rôle.** Elle assure que $f(a+t)$ est défini pour $|t|$ petit, des deux côtés de $a$, ce qui est le cadre de la Définition V.3.1.

**Si on la retire.** Sur un intervalle fermé $[\alpha,\beta]$, en $a=\alpha$, seule la limite à droite a un sens : la définition du chapitre ne s'applique pas telle quelle et on parle de **dérivée à droite**. C'est une hypothèse de cadre ; les énoncés de la suite qui portent sur $[\alpha,\beta]$ (accroissements finis, [[ch05-accroissements-finis-vectoriel]]) utilisent des dérivées sur l'intervalle ouvert ou des dérivées à droite.

### H2 — $f$ différentiable en $a$

**Rôle.** C'est ce qui donne l'existence de $df_a$, donc de $f'(a)$.

**Si on la retire.** Exemple à valeurs dans un espace de fonctions : $F=C([0,1])$ muni de $\|\cdot\|_\infty$ et $f(t)=\big(x\mapsto|x-t|\big)$, en $a=\frac12$. Si $f$ était différentiable en $\frac12$, de vecteur tangent $g\in C([0,1])$, la convergence uniforme du taux d'accroissement entraînerait sa convergence simple : pour $x\ne\frac12$ et $0<|s|<|x-\frac12|$, $\frac{|x-\frac12-s|-|x-\frac12|}{s}$ vaut $-1$ si $x>\frac12$ et $+1$ si $x<\frac12$. On aurait $g=+1$ sur $[0,\frac12[$ et $g=-1$ sur $]\frac12,1]$, impossible pour une fonction continue. Donc $f$ n'est pas différentiable en $\frac12$, bien que $f$ soit $1$-lipschitzienne ($\|f(t)-f(s)\|_\infty\le|t-s|$).

## Idée de la preuve

Une application linéaire $T:\R\to F$ vérifie $T(t)=T(t\cdot1)=t\,T(1)$ : elle est déterminée par $T(1)$, et $\|T\|=\|T(1)\|$. La dérivée directionnelle dans la direction $h=1$ est exactement le taux d'accroissement usuel.

## Preuve

*Point 1.* Si $T:\R\to F$ est linéaire, $T(t)=T(t\cdot1)=t\,T(1)$ pour tout $t\in\R$. Donc $\Phi$ est injective, et elle est évidemment linéaire. Pour $v\in F$, $T_v(t)=t\,v$ est linéaire et continue car $\|T_v(t)\|_F=|t|\,\|v\|_F$ ; ainsi $T_v\in\mathcal L(\R;F)$ et $\Phi(T_v)=v$ : $\Phi$ est surjective, d'inverse $v\mapsto T_v$. Enfin
$$
\|T\|_{\mathcal L(\R;F)}=\sup_{|t|\le1}\|t\,T(1)\|_F=\|T(1)\|_F .
$$

*Point 2.* Par définition ([[ch05-differentielle-def]]), $df_a\in\mathcal L(\R;F)$ ; par le point 1, $df_a=T_{f'(a)}$ avec $f'(a):=df_a(1)$, c'est-à-dire $df_a(t)=t\,f'(a)$.

*Complément.* Si $f$ est différentiable en $a$, la formule des dérivées directionnelles ([[ch05-derivee-directionnelle-unicite]]) avec $h=1$ donne $\lim_{t\to0}\frac{f(a+t)-f(a)}t=df_a(1)=f'(a)$. Réciproquement, supposons que cette limite existe et notons-la $v$. Soit $\eps>0$ et $\delta>0$ tel que $\big\|\frac{f(a+t)-f(a)}t-v\big\|_F\le\eps$ pour $0<|t|<\delta$. Alors pour $|t|<\delta$ (le cas $t=0$ étant trivial)
$$
\|f(a+t)-f(a)-T_v(t)\|_F=|t|\,\Big\|\frac{f(a+t)-f(a)}t-v\Big\|_F\le\eps|t| ,
$$
et $T_v\in\mathcal L(\R;F)$ : $f$ est différentiable en $a$, avec $df_a=T_v$, $f'(a)=v$. Enfin, $\Phi$ étant une isométrie, $\|df_a-df_b\|=\|f'(a)-f'(b)\|_F$ : $df$ est continue si et seulement si $f'$ l'est. $\square$

## Preuve à trous

*Point 1.* Si $T\in\mathcal L(\R;F)$, <trou indice="écrire t comme t·1">$T(t)=t\,T(1)$ pour tout $t$</trou>, donc $\Phi$ est injective ; elle est surjective car <trou>$t\mapsto t\,v$ est linéaire continue et envoie $1$ sur $v$</trou>, et $\|T\|=\sup_{|t|\le1}|t|\,\|T(1)\|=\|T(1)\|$.

*Complément.* Si $f$ est différentiable, la dérivée directionnelle en $h=1$ donne $\frac{f(a+t)-f(a)}t\to df_a(1)$. Réciproquement, si ce taux tend vers $v$, on écrit <trou indice="faire apparaître le taux d'accroissement">$\|f(a+t)-f(a)-t\,v\|_F=|t|\,\big\|\frac{f(a+t)-f(a)}t-v\big\|_F\le\eps|t|$ pour $|t|$ petit</trou>, donc $df_a(t)=t\,v$. $\square$

## Exemples

* **Le cercle.** $f:\R\to\R^2$, $f(t)=(\cos t,\sin t)$ : $f'(a)=(-\sin a,\cos a)$ (dérivée composante par composante, [[ch05-differentiabilite-composantes]]), et $df_a(s)=s\,(-\sin a,\cos a)$. Le vecteur tangent est orthogonal au rayon $f(a)$ et de norme $1$.
* **Courbe dans un espace de fonctions.** $F=C([0,1])$ muni de $\|\cdot\|_\infty$, $f(t)=\big(x\mapsto e^{tx}\big)$. Candidat : $g_t(x)=x\,e^{tx}$. Pour $s\ne0$ et $x\in[0,1]$, avec $u=sx$ et l'inégalité $|e^u-1-u|\le\frac{u^2}2e^{|u|}$ :
$$
\Big|\frac{e^{(t+s)x}-e^{tx}}s-x\,e^{tx}\Big|=\frac{e^{tx}\,|e^{sx}-1-sx|}{|s|}\le e^{|t|}\,\frac{|s|}2\,e^{|s|}\xrightarrow[s\to0]{}0
$$
uniformément en $x$. Donc $f$ est différentiable en tout $t$ et $f'(t)=g_t$.
* **$C^1$.** Dans l'exemple précédent, $\|g_t-g_{t'}\|_\infty=\sup_x x\,|e^{tx}-e^{t'x}|\le e^{\max(|t|,|t'|)}|t-t'|$ (accroissements finis en $t$, à $x$ fixé) : $f'$ est continue, donc $f$ est $C^1$.

## Pièges

* > ⚠️ $f'(a)$ est un **vecteur** de $F$, $df_a$ est une **application** $\R\to F$ ; on passe de l'un à l'autre par $df_a(t)=t\,f'(a)$ et $f'(a)=df_a(1)$.
* Cette identification n'existe que si l'espace de départ est $\R$ (ou un ouvert de $\R$). Pour $E=\R^n$, $n\ge2$, il n'y a pas « une » dérivée mais une application linéaire (ou une matrice jacobienne, [[ch05-matrice-jacobienne]]).
* Pour une fonction $f:\R\to\R$, $f'(a)$ est le nombre dérivé usuel, et $df_a$ est la multiplication par $f'(a)$.
* À valeurs dans un espace de fonctions, la limite du taux d'accroissement se prend pour la norme de $F$ (ici uniforme) : la convergence simple ne suffit pas (exemple $|x-t|$ de H2).
