---
id: rfx-diff-accroissements-finis
type: reflexe
situation: Majorer f(b)−f(a), montrer qu'une application est lipschitzienne (contractante) ou constante
chapters: [5, 6, 7]
---
## Situation

On a $f:U\to F$ différentiable sur un ouvert $U$ d'un espace vectoriel normé $E$, avec une information sur la **différentielle** : une borne $\|df_x\|\le k$, ou $df=0$, ou $\|df_x-df_c\|$ petit près de $c$. On veut une information sur les **valeurs** : « montrer que $\|f(x)-f(y)\|\le k\|x-y\|$ », « montrer que $T$ est contractante sur la boule $\bar B(x_0,r)$ », « montrer que $f$ est constante », « majorer $\|f(b)-f(a)-df_c(b-a)\|$ ». C'est l'étape qui **alimente** le point fixe de Banach, l'inversion locale quantitative, Newton, Gronwall.

## Options

### [x] Inégalité des accroissements finis (TAF vectoriel) — [[ch05-accroissements-finis]]
**Quand.** Le segment $[a,b]$ est dans $U$, et l'on sait borner $\|df_x\|_{\mathcal L(E;F)}$ sur ce segment. Si $U$ est **convexe** et $\sup_U\|df_x\|\le k$, alors $f$ est $k$-lipschitzienne sur $U$ (poly, Théorème V.4.4, p. 104).
**Justification.** On se ramène à la variable réelle $t\mapsto f(a+t(b-a))$ et au Théorème V.4.1 ; la règle de la chaîne donne la dérivée $df_{a+t(b-a)}(b-a)$.
**Pièges.** Il faut le **segment** dans le domaine : sur un ouvert non convexe, $\|df\|\le k$ ne donne pas $f$ globalement lipschitzienne (fonction angle $\theta$ sur la couronne $1<|z|<2$ privée de $]-2,-1[$ : $\|d\theta\|=1/r\le1$ mais $\theta$ saute de presque $2\pi$ entre $-\tfrac32\pm i\eps$). Variante **centrée**, très utile (Newton, inversion locale quantitative) : appliquer le TAF à $g=f-df_c$, ce qui donne $\|f(b)-f(a)-df_c(b-a)\|\le\sup_{u\in[a,b]}\|df_u-df_c\|\,\|b-a\|$ (question préliminaire de [[ch06-methode-de-newton]]). Penser à vérifier que la **boule** (convexe) est dans $U$.

### [x] Formule fondamentale du calcul différentiel (version intégrale) — [[ch05-theoreme-fondamental]]
**Quand.** $f$ est $C^1$, $F$ est **complet**, et l'on veut une **égalité** exploitable : $f(x+y)-f(x)=\int_0^1df_{x+ty}(y)\,dt$ (poly, Théorème V.4.7, p. 105). Utile pour écrire $f(x)-f(0)=A(x)\,x$ avec $A(x)=\int_0^1df_{tx}\,dt$ continue (« lemme de division »), pour comparer deux applications, pour dériver ensuite sous l'intégrale.
**Justification.** Primitive d'une fonction continue à valeurs dans un Banach (Théorème V.4.6).
**Pièges.** Demande $C^1$ (pas seulement différentiable) et $F$ Banach ; l'inégalité du TAF, elle, vaut dans tout evn.

### [x] Différentielle nulle sur un connexe — [[ch05-differentielle-nulle-constante]]
**Quand.** On veut montrer qu'une fonction (ou une **quantité conservée**, une intégrale première, l'identité $\Phi(x)=\Psi(x)$) est constante : calculer sa différentielle (ou sa dérivée le long des solutions) et montrer qu'elle est nulle, puis invoquer la **connexité** du domaine (poly, Corollaire V.4.5, p. 104).
**Justification.** TAF avec $k=0$ sur des boules, puis argument « ouvert-fermé » dans le connexe $U$.
**Pièges.** Sans connexité, seulement **localement** constante ($f=\mathbf 1_{x>0}$ sur $\R^*$).

### [x] Accroissements finis avec fonction de comparaison (variable réelle) — [[ch05-accroissements-finis-vectoriel]]
**Quand.** $f:[a,b]\to F$ d'une variable réelle avec une borne **non uniforme** $\|f'(t)\|\le g'(t)$ : on conclut $\|f(b)-f(a)\|\le g(b)-g(a)$ (poly, Théorème V.4.1, p. 103). Typique pour les estimations le long d'une solution d'EDO ($g'(t)=k\|x(t)\|$...), ou quand $\|f'(t)\|\le Ct^2$.
**Justification.** Preuve par « premier temps où l'inégalité $\|f(t)-f(a)\|\le g(t)-g(a)+\eps(t-a)+\eps$ échoue ».
**Pièges.** C'est une inégalité, jamais une égalité : pas de « $c$ » intermédiaire.

### [ ] Égalité des accroissements finis « $f(b)-f(a)=df_c(b-a)$ » — [[ch05-derivee-variable-reelle]]
**Pourquoi ce n'est pas l'outil ici.** Fausse dès que $F\ne\R$ : $f(t)=(\cos t,\sin t)$ vérifie $f(2\pi)-f(0)=0$ alors que $f'(t)\ne0$ pour tout $t$. Écrire « il existe $c$ tel que » est une faute sanctionnée.
**Quand il le serait.** Pour $f$ **à valeurs réelles** : appliquer le théorème des accroissements finis réel (Rolle) à $\varphi(t)=f(a+t(b-a))$ (ou à chaque composante, mais avec des $c$ différents d'une composante à l'autre).

### [ ] Point fixe de Banach — [[ch06-point-fixe-banach]]
**Pourquoi ce n'est pas l'outil ici.** Il **consomme** une estimation de Lipschitz $<1$, il ne la produit pas.
**Quand il le serait.** Juste après : une fois $T$ contractante (par le TAF) et $T(X)\subset X$ établi, voir [[rfx-diff-point-fixe]].

## Démarche

1. **Lipschitz / contractante** : calculer $df_x$, majorer $\|df_x\|_{\mathcal L(E;F)}$ (norme d'opérateur : $\sup_{\|h\|\le1}\|df_x(h)\|$) sur un **convexe** $C$ (boule, segment, $E$ entier) ; conclure par le TAF. Si la constante obtenue est $<1$ et $f(C)\subset C$ avec $C$ fermé dans un Banach, enchaîner sur le point fixe.
2. **Constante** : montrer $df=0$ (ou dérivée nulle le long des courbes) et invoquer la connexité.
3. **Comparer $f$ à son linéarisé** : variante centrée $\|f(b)-f(a)-df_c(b-a)\|\le\sup_{[a,b]}\|df_u-df_c\|\,\|b-a\|$ ; si $df$ est $M$-lipschitzienne, cela donne $\le M\max(\|a-c\|,\|b-c\|)\|b-a\|$.
4. **Égalité exacte** souhaitée (pour dériver ensuite, ou factoriser) : formule intégrale $f(x+y)=f(x)+\int_0^1df_{x+ty}(y)\,dt$.
5. **Variable réelle avec borne non uniforme** : comparaison $\|f'\|\le g'$.

## Pièges

* Écrire une **égalité** des accroissements finis pour une fonction vectorielle.
* Oublier de vérifier que le segment (ou la boule) est contenu dans le domaine.
* Majorer la norme d'opérateur par une norme non adaptée (par exemple utiliser le sup des coefficients d'une matrice comme norme d'opérateur sans constante).
* « $\|T(x)-T(y)\|<\|x-y\|$ » n'est pas « contractante » : il faut une constante $k<1$ **uniforme**.
* Conclure « constante » sans connexité.

## Mini-exemple

*Énoncé.* Sur $U=\{A\in\mathrm M_n(\R)\,;\,\|A-I\|<\tfrac12\}$ ($\|\cdot\|$ norme d'opérateur), montrer que $A\mapsto A^{-1}$ est $4$-lipschitzienne.

*Solution.* Pour $A\in U$, $A=I-(I-A)$ avec $\|I-A\|<\tfrac12$ : par la série de Neumann [[ch05-serie-neumann]], $A$ est inversible et $\|A^{-1}\|\le\sum_n\|I-A\|^n\le\frac1{1-1/2}=2$. La différentielle de $\Psi:A\mapsto A^{-1}$ est $d\Psi_A(H)=-A^{-1}HA^{-1}$ ([[ch05-inversion-c-infini]]), donc $\|d\Psi_A(H)\|\le\|A^{-1}\|^2\|H\|\le4\|H\|$, soit $\|d\Psi_A\|\le4$. $U$ est une boule, donc convexe : le TAF donne $\|A^{-1}-B^{-1}\|\le4\|A-B\|$ pour $A,B\in U$. (Vérification directe : $A^{-1}-B^{-1}=A^{-1}(B-A)B^{-1}$.)
